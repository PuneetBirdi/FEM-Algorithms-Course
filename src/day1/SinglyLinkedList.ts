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
			
			let targetNode = this.head
			for(let i = 0; i < this.length && targetNode; i++){
				if(targetNode.value === item){
					break
				} else if(targetNode.next){
					targetNode = targetNode.next
				} else {
					return undefined
				}
			}
			return
		}
    get(idx: number): T | undefined {
			let curr = this.head
			return curr?.value
		}
    removeAt(idx: number): T | undefined {
			let target = this.head
			return target?.value
		}
}
