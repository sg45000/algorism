
class Node {
    key;
    prev;
    next;
    static init() {
        const node = new Node();
        node.key = null;
        node.prev = node;
        node.next = node;
        return node;
    }


    insert(key) {
        const node = new Node();
        node.key = key;

        node.next = this.next;
        this.next.prev = node;

        node.prev = this;
        this.next = node;
    }

    listSearch(key) {
        if(!!this.next && this.next.key !== key && this.next.key !== null) {
            return this.next.listSearch(key);
        }
        return this.next;
    }

    deleteNode(target) {
        if(target.key === null){
            return;
        }
        target.next.prev = target.prev;
        target.prev.next = target.next;
        // targetのメモリ開放はGCで行われる
    }

    deleteFirst() {
        const target = this.next;
        this.deleteNode(target);
    }

    deleteLast() {
        const target = this.prev;
        this.deleteNode(target);
    }

    deleteByKey(key) {
        this.deleteNode(this.listSearch(key))
    }
}

function doublyLinkedList() {
    const list = Node.init();

    list.insert(1)
    list.insert(2)
    list.insert(3)
    // console.log(list.listSearch(3).key)
    // console.log(list.listSearch(4).key)
    console.log(list.listSearch(1).key)
    console.log(list.listSearch(3).key)
    console.log(list.listSearch(2).key)

    list.deleteFirst();
    list.deleteLast();
    list.deleteByKey(2);
    console.log(list.listSearch(2).key)
    console.log(list.listSearch(3).key)
    console.log(list.listSearch(1).key)
}

doublyLinkedList();
