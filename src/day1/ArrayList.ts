export default class ArrayList<T> {
    public length: number;
		public capacity: number;
		public values: Array<number>
    

    constructor(length: number, capacity: number, values: Array<T> ) {
			this.length = 0 || length
			this.capacity = 3 || capacity
			this.values = new Array().fill(null, this.capacity) || values
    }

    prepend(item: T): void {
			//If this is full then make a new one and reassign
			if(this.length === this.capacity){
				const newValues = [item, ...this.values]
				const newArrayList = new ArrayList(this.length + 1, this.capacity + 1, newValues)
				this = newArrayList
			}
		}
    insertAt(item: T, idx: number): void {

}
    append(item: T): void {

}
    remove(item: T): T | undefined {

}
    get(idx: number): T | undefined {

}
    removeAt(idx: number): T | undefined {

}
}
