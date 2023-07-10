type Node<T> = {
	value: T,
	prev?: Node<T>,
	next?: Node<T>
}
export default class DoublyLinkedList<T> {
    public length: number;
		public head?: Node<T>
		public tail?: Node<T>
    

    constructor() {
			this.head = this.tail = undefined
			this.length = 0
    }

    prepend(item: T): void {
			const node = { value: item } as Node<T>
			if(!this.head){
				this.head = node
				this.tail = node
				this.length++
			}
			const currHead = this.head
			node.next = currHead
			currHead.prev = node
		}
    insertAt(item: T, idx: number): void {

}
    append(item: T): void {
			const node = { value: item } as Node<T>
			if(!this.tail){
				this.tail = node
				length++
					return
			}
			const currentTail = this.tail
			currentTail.next = node
			node.prev = currentTail
			this.tail = node
		}
    remove(item: T): T | undefined {
			if(!this.head || !this.tail){
				return undefined
			}
			if(this.head.value === item){
				const value = this.head.value
				this.head = this.head.next
				this.length--
				return value
			}
			if(this.tail.value === item){
				const value = this.tail.value
				this.tail = this.tail.prev
				this.length--
				return value
			}
			let curr = this.head
			for(let i = 0; i < this.length && curr.next; i++){
				if(curr.value === item){
					break
				} else {
					curr = curr.next
				}
			}
			const prevNode = curr.prev
			const nextNode = curr.next
			prevNode.next = nextNode
			nextNode.prev = prevNode
			curr.prev = undefined
			curr.next = undefined
			return curr.value
		}
    get(idx: number): T | undefined {
			if(!this.head || !this.tail){
				return undefined
			}

			if(idx === 0){
				return this.head.value
			}

			if(idx === this.length - 1){
				return this.tail.value
			}

			let curr = this.head
			for(let i = 0; i < idx && curr.next; i++) {
				curr = curr.next
			}
			if(!curr) {
				return undefined
			}
			return curr?.value
		}
    removeAt(idx: number): T | undefined {

}
}
