/**
 * 2分探索木node
 */
class BinaryTreeNode {
    value;
    left;
    right;
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    largerThan(node) {
        return this.value > node.value;
    }

    equal(node) {
        return this.value === node.value;
    }
}

/**
 * 2分探索木
 * 左に小さい値のnodeが、右に大きい値のnodeが保存される
 */
class BinarySearchTree {
    root = null;
    addNode(value) {
        const node = new BinaryTreeNode(value);
        if(!this.root) {
            this.root = node;
            return;
        }
        let current = this.root;
        let direction = current.largerThan(node) ? 'left' : 'right';
        while(current[direction]) {
            current = current[direction];
            direction = current.largerThan(node) ? 'left' : 'right';
        }
        current[direction] = node;
    }

    search(value) {
        const node = new BinaryTreeNode(value);
        let current = this.root;
        if(current.equal(node)) return true;
        let direction = current.largerThan(node) ? 'left' : 'right';
        while(current[direction]) {
            if(current[direction].equal(node)) {
                return true;
            }
            current = current[direction];
            direction = current.largerThan(node) ? 'left' : 'right';
        }
        return false;
    }
}

function main(arr) {
    const binarySearchTree = new BinarySearchTree();
    for(let i = 0; i < arr.length; i++) {
        binarySearchTree.addNode(arr[i]);
    }
    console.log(binarySearchTree.search(21));
}
main([20,4,1,5,7,89,21])
