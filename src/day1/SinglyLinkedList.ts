export default class SinglyLinkedList<T> {
    public length: number
		public head: ListNode<T> | null
		public tail: ListNode<T> | null

    constructor() {
			this.head = null
			this.length = 0
    }

    prepend(item: T): void {
			const newNode = new ListNode<T>(item)
			if (!this.head || this.tail) {
				this.head = newNode
				this.tail = newNode
			} else {
				//get the current head
				const currentHead = this.head
				//point the current heads previous pointer towards the new node
				currentHead.prev = newNode
				//point the new nodes next point to the current
				newNode.next = currentHead
			}
		}
    insertAt(item: T, idx: number): void {
			const newNode = new ListNode<T>(item)
			let currentNode = this.head
			for (let i = 0; i < idx; i++) {
				if(currentNode!.next) {
					currentNode = currentNode!.next
				}
			}
			
		}
    append(item: T): void {
			const newNode = new ListNode<T>(item)
			if(!this.head || !this.tail) {
				this.head = newNode
				this.tail = newNode
			} else {
				//get the current tail
				const currentTail = this.tail
				//point the current tails next towards the new node
				currentTail.next = newNode
				//point the new nodes previous to the current tail
				newNode.prev = currentTail
			}

}
    remove(item: T): T | undefined {

}
    get(idx: number): T | undefined {
			let current = this.head
			for (let i = 0; i < idx; i++) {
				if(current!.next) {
					current = current!.next
				}
			}
			return current?.value
		}
    removeAt(idx: number): T | undefined {

}
}
