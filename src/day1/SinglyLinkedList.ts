type Node<T> = {
	value: T,
	next?: Node<T>
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
			this.length++
			if(!this.head){
				this.head = this.tail = node
				return
			}
			node.next = this.head
			this.head = node
		}
    insertAt(item: T, idx: number): void {
			const node = {value:item} as Node<T>
			this.length++
			if(!this.head){
				this.head = this.tail = node
				return
			}

			let targetNode = this.head
			for(let i = 0; i < idx - 1 && targetNode; i++){
				if(targetNode.next){
					targetNode = targetNode.next
				}
			}
			node.next = targetNode.next
			targetNode.next = node
			return
		}
    append(item: T): void {
			const node = {value: item} as Node<T>
			this.length++
			if(!this.tail) {
				this.head = this.tail = node
				return
			}
			this.tail.next = node
			this.tail = node
		}
    remove(item: T): T | undefined {
			if(!this.head){
				return undefined
			}
			if(this.head.value === item){
				const target = this.head
				this.head = this.head.next
				this.length--
				return target.value
			}
			
			let currNode = this.head
			for(let i = 0; i < this.length - 1 && currNode; i++){
				if(currNode?.next?.value === item){
					break
				} else if(currNode.next){
					currNode = currNode.next
				} else {
					return undefined
				}
			}
			const targetNode = currNode.next
			let nextNode
			if(targetNode?.next){
				nextNode = targetNode.next
				currNode.next = nextNode
			}
			if(targetNode){
				targetNode.next = undefined
				this.length--
				return targetNode.value
			}else {
				return undefined
			}
		}
    get(idx: number): T | undefined {
			let curr = this.head

			for(let i = 0; i < idx && curr; i++) {
				curr = curr.next
			}
			if(!curr) {
				return undefined
			}
			return curr?.value
		}
    removeAt(idx: number): T | undefined {
			if(!this.head){
				return undefined
			}
			if(idx === 0){
				const currNode = this.head
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
