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
			const node = { value: item } as Node<T>
			if(!this.head || !this.tail){
				this.head = this.tail = node
				this.length++
				return
			}
			if(idx === 0){
				const currHead = this.head
				currHead.prev = node
				node.next = currHead
				this.head = node
				this.length++
				return
			}
			if(idx === this.length - 1){
				const currTail = this.tail
				currTail.next = node
				node.prev = currTail
				this.tail = node
				this.length++
				return
			}

			let targetNode = this.head
			for(let i = 0; i < idx - 1 && targetNode; i++){
				if(targetNode.next){
					targetNode = targetNode.next
				}
			}
			const prevNode = targetNode.prev
			if(prevNode){
				prevNode.next = node
			}
			targetNode.prev = node
			node.prev = prevNode
			node.next = targetNode
			this.length++
			return
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
			if(prevNode){
				prevNode.next = nextNode
			}
			if(nextNode){
				nextNode.prev = prevNode
			}
			curr.prev = undefined
			curr.next = undefined
			this.length--
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
			if(!this.head || !this.tail){
				return undefined
			}
			if(idx === 0){
				const currNode = this.head
				const nextNode = this.head.next
				if(nextNode){
					nextNode.prev = undefined
				}
				this.head = this.head.next
				this.length--
				return currNode.value
			}

			let currNode = this.head
			for(let i = 0; i < idx - 1 && currNode; i++){
				if(currNode.next){
					currNode = currNode.next
				} else{
					return undefined
				}
			}
			const targetNode = currNode.next
			let nextNode
			if(targetNode?.next){
				nextNode = targetNode.next
				currNode.next = nextNode
				targetNode.next = undefined
				this.length--
				return targetNode.value
			}else {
				return undefined
			}
		}
}
