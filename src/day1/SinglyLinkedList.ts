type Node<T> = {
	value: T,
	next?: Node<T>
	prev?: Node<T>
}
export default class SinglyLinkedList<T> {
    public length: number
		public head?: Node<T>
		public tail?: Node<T>
		
    constructor() {
			this.head = undefined
			this.tail = undefined
			this.length = 0
    }

    prepend(item: T): void {
			const node = {value: item} as Node<T>
			if(!this.head) {
				this.head = this.tail = node
				return
			}
			const currHead = this.head
			node.next = currHead
			currHead.prev = node
			this.head = node
		}
    insertAt(item: T, idx: number): void {
			const node = {value:item} as Node<T>
			let targetNode = this.head

			if(!this.head) {
				this.head = this.tail = node
				return
			}
			for (let i = 0; i < idx && targetNode; i++) {
				targetNode = targetNode.next
			}
			const preNode = targetNode?.prev
			const postNode = targetNode?.next

			if(preNode){
				preNode.next = node
				node.prev = preNode
			}

			if(postNode){
				postNode.prev = node
				node.next = postNode
			}
		}
    append(item: T): void {
			const node = {value: item} as Node<T>
			if(!this.tail){
				this.tail = this.head = node
			}
			this.tail.next = node
			node.prev = this.tail
			this.tail = node
		}
    remove(item: T): T | undefined {
			let curr = this.head
			let target
			if(!this.head) {
				return undefined
			}

			for (let i = 0; i < this.length && curr; i++) {
				curr = curr.next
				if(curr?.value === item){
					target = curr
				}
				break
			}
			const preNode = target?.prev
			const postNode = target?.next

			return target?.value
		}
    get(idx: number): T | undefined | null {
			let curr = this.head

			if(!this.head) {
				return undefined
			}
			for (let i = 0; i < idx && curr; i++) {
				curr = curr.next
			}
			return curr?.value
		}
    removeAt(idx: number): T | undefined {
		}
}
