/**
 * 値と左右のサブツリーを持つノードオブジェクト
 *
 * @param val
 * @param left
 * @param right
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * 完全2分木
 * @param v
 * @constructor
 */
function CompleteBinaryTree(v) {
    this.root = null;

    /**
     * 木作成
     * @param val
     * @param queue
     * @returns {*}
     */
    this.makeTree = (val, queue) => {
        let next = queue.shift();
        queue.push(next + 'l')
        queue.push(next + 'r')
        if(val === null) {
            return queue;
        }

        const directions = next.split('');
        let currentNode = this.root;
        let direction;
        for(let i = 0; i < directions.length; i++) {
            direction = directions[i];
            direction = direction === 'l' ? 'left' : 'right';
            if(!currentNode[direction]) break;
            currentNode = currentNode[direction]
        }
        currentNode[direction] = new TreeNode(val);
        return queue;
    }
}

/**
 * メイン関数
 * @param arr
 * @returns {null}
 */
function main(arr) {
    const tree = new CompleteBinaryTree();
    tree.root = new TreeNode(arr[0]);
    if(arr.length >= 3) {
        let queue = ['l', 'r']
        for(let i = 1; i < arr.length; i++) {
            queue = tree.makeTree(arr[i], queue)
        }
    }
    return tree.root;
}

console.log(JSON.stringify(main([5, 1, 4, null, null, 3, 6])))
