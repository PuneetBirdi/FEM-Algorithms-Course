export class Node<T> {
	public next: Node<T> | null = null;
	public prev: Node<T> | null = null;

	constructor(public value: T | null) {
		this.value = null
		this.prev = null
		this.next = null
	}
}
export default class SinglyLinkedList<T> {
    public length: number
		public head: Node<T> | null
		public tail: Node<T> | null
		
    constructor() {
			this.head = null
			this.length = 0
    }

    prepend(item: T): void {
			const newNode = new Node(item)
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
				this.length++
			}
		}
    insertAt(item: T, idx: number): void {
			const newNode = new Node(item)
			let targetNode = this.head
			for (let i = 0; i < idx; i++) {
				if(targetNode!.next) {
					targetNode = targetNode!.next
				}
			}
			let preNode = targetNode?.prev
			preNode!.next = newNode
			targetNode!.prev = newNode
			this.length++
		}
    append(item: T): void {
			const newNode = new Node(item)
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
				this.length++
			}
		}
    remove(item: T): T | undefined {
			let targetNode = this.head
			//Empty linked list
			if(this.length === 0){
				return undefined
			}
			//Only one node
			if(this.length === 1 && targetNode){
				targetNode.value = null
				targetNode.prev = null
				targetNode.next = null
				return undefined
			}
			//Multiple nodes
			for (let i = 0; i < this.length; i++) {
				targetNode = targetNode!.next
				if(targetNode?.value === item) {
					targetNode = targetNode!.next
				}
			}
			let preNode
			let postNode
			if(targetNode?.prev || targetNode?.next){
				preNode = targetNode.prev
				postNode = targetNode.next
			}
			if(preNode && postNode) {
				preNode.next = postNode
				postNode.prev = preNode
			}
			return undefined
		}
    get(idx: number): T | undefined | null {
			let current = this.head
			if(this.length === 0){
				return undefined
			}
			if(this.length === 1) {
				return current?.value
			}
			for (let i = 0; i < idx; i++) {
				if(current!.next) {
					current = current!.next
				}
			}
			return current?.value
		}
    removeAt(idx: number): T | undefined {
			let targetNode = this.head
			//Empty linked list
			if(this.length === 0){
				return undefined
			}
			//Only one node
			if(this.length === 1 && targetNode){
				targetNode.value = null
				targetNode.prev = null
				targetNode.next = null
				return undefined
			}
			//Multiple nodes
			for (let i = 0; i < idx; i++) {
				if(targetNode!.next) {
					targetNode = targetNode!.next
				}
			}
			let preNode
			let postNode
			if(targetNode?.prev || targetNode?.next){
				preNode = targetNode.prev
				postNode = targetNode.next
			}
			if(preNode && postNode) {
				preNode.next = postNode
				postNode.prev = preNode
			}
			return undefined
		}
}
