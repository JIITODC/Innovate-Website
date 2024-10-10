#include <iostream>
#include <unordered_map>
#include <vector>
#include <string>
using namespace std;

class TreeLockingSystem {
public:
    vector<int> parent; // To store parent of each node
    unordered_map<string, int> locked; // To store if a node is locked and by whom
    unordered_map<string, int> nodeIndex; // To map node names to their indices
    vector<vector<int>> children; // To store the children of each node
    int n; // number of nodes

    TreeLockingSystem(int n, int m, vector<string>& nodeNames) : n(n) {
        parent.resize(n, -1);
        children.resize(n);
        for (int i = 0; i < n; ++i) {
            nodeIndex[nodeNames[i]] = i;
        }
    }

    void addChild(int p, int c) {
        children[p].push_back(c);
        parent[c] = p;
    }

    bool isLockedOrAncestorLocked(int node) {
        while (node != -1) {
            if (locked.count(to_string(node)) > 0) return true;
            node = parent[node];
        }
        return false;
    }

    bool isDescendantLocked(int node) {
        if (locked.count(to_string(node)) > 0) return true;
        for (int child : children[node]) {
            if (isDescendantLocked(child)) return true;
        }
        return false;
    }

    bool lock(string X, int uid) {
        int node = nodeIndex[X];
        if (locked.count(X) > 0 || isLockedOrAncestorLocked(parent[node]) || isDescendantLocked(node))
            return false;
        
        locked[X] = uid;
        return true;
    }

    bool unlock(string X, int uid) {
        if (locked.count(X) == 0 || locked[X] != uid) return false;

        locked.erase(X);
        return true;
    }
};

int main() {
    int n, m, q;
    cin >> n >> m >> q;

    vector<string> nodeNames(n);
    for (int i = 0; i < n; ++i) {
        cin >> nodeNames[i];
    }

    TreeLockingSystem system(n, m, nodeNames);

    for (int i = 1; i < n; ++i) {
        int parent, child;
        cin >> parent >> child;
        system.addChild(parent - 1, child - 1); // 1-based to 0-based index
    }

    while (q--) {
        int op, uid;
        string X;
        cin >> op >> X >> uid;

        if (op == 1) {
            cout << (system.lock(X, uid) ? "true" : "false") << endl;
        } else if (op == 2) {
            cout << (system.unlock(X, uid) ? "true" : "false") << endl;
        }
    }

    return 0;
}