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
			console.log(this)
			const node = { value: item } as Node<T>

			if(!this.head || !this.tail){
				this.head = this.tail = node
				this.length++
				return
			}
			const currentHead = this.head
			node.next = currentHead
			currentHead.prev = node
			this.head = node
			this.length++
		}
    insertAt(item: T, idx: number): void {
			const node = {value:item} as Node<T>
			
			//Empty list
			if(!this.head || !this.tail){
				this.head = this.tail = node
				this.length++
				return
			}

			//Insert at start
			if(idx === 0){
				const currentHead = this.head
				currentHead.prev = node
				node.next = currentHead
				this.head = node
				this.length++
				return
			}
			//Insert at end
			if(idx === this.length - 1){
				const currentTail = this.tail
				currentTail.next = node
				node.prev = currentTail
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
				node.prev = prevNode
				node.next = targetNode
				targetNode.prev = node
				this.length++
				return
			}
			return
		}
    append(item: T): void {
			const node = { value: item } as Node<T>

			if(!this.head || !this.tail){
				this.head = this.tail = node
				this.length++
				return
			}

			const currentTail = this.tail
			node.prev = currentTail
			currentTail.next = node
			this.tail = node
			this.length++
		}
    remove(item: T): T | undefined {
			if(!this.head || !this.tail){
				return undefined
			}

			//Remove Head
			if(this.head.value === item){
				const currentHead = this.head
				if(!currentHead.next){
					this.head = undefined
					this.tail = undefined
					this.length--
					return currentHead.value
				}
				const newHead = currentHead.next
				newHead.prev = undefined
				currentHead.next = undefined
				this.head = newHead
				this.length--
				return currentHead.value
			}

			//Remove tail
			if(this.tail.value === item){
				const currentTail = this.tail
				if(!currentTail.prev){
					this.length--
					return currentTail.value
				}
				const newTail = currentTail.prev
				newTail.prev = undefined
				this.tail = newTail
				this.length--
				return currentTail.value
			}

			//Remove inbetweens
			let targetNode = this.head
			for(let i = 0; i < this.length - 1 && targetNode; i++){
				if(targetNode.value === item){
					break
				}
				if(targetNode.next){
					targetNode = targetNode.next
				}
				if(!targetNode.next){
					return undefined
				}
			}
			const prevNode = targetNode.prev
			const nextNode = targetNode.next

			if(prevNode){
				prevNode.next = nextNode
			}
			if(nextNode){
				nextNode.prev = prevNode
			}
			targetNode.next = undefined
			targetNode.prev = undefined

			this.length--
			return targetNode.value

		}
    get(idx: number): T | undefined {
			if(!this.head || !this.tail || (idx > this.length - 1)){
				return undefined
			}
			if(idx === 0){
				return this.head.value
			}
			if(idx === this.length - 1){
				return this.tail.value
			}

			let targetNode = this.head
			for(let i = 0; i < idx - 1; i++){
					if(targetNode.next){
						targetNode = targetNode.next
					}
			}
			return targetNode.value
		}
    removeAt(idx: number): T | undefined {
			if(!this.head || !this.tail || (idx > this.length - 1)){
				return undefined
			}

			//Remove Head
			if(idx === 0){
				const currentHead = this.head
				if(!currentHead.next){
					this.head = undefined
					this.tail = undefined
					this.length--
					return currentHead.value
				}
				const newHead = currentHead.next
				newHead.prev = undefined
				currentHead.next = undefined
				this.head = newHead
				this.length--
				return currentHead.value
			}

			//Remove tail
			if(idx === this.length - 1){
				const currentTail = this.tail
				if(!currentTail.prev){
					this.length--
					return currentTail.value
				}
				const newTail = currentTail.prev
				newTail.prev = undefined
				this.tail = newTail
				this.length--
				return currentTail.value
			}

			//Remove inbetweens
			let targetNode = this.head
			for(let i = 0; i < idx; i++){
				if(targetNode.next){
					targetNode = targetNode.next
				}
			}
			const prevNode = targetNode.prev
			const nextNode = targetNode.next

			if(prevNode){
				prevNode.next = nextNode
			}
			if(nextNode){
				nextNode.prev = prevNode
			}
			targetNode.next = undefined
			targetNode.prev = undefined
			this.length--
			return targetNode.value
		}
}
