'use strict';

class Sort_machine {

	constructor(array) {
		this.array = array;
		this.swap = (idx1,idx2) => { 
			let temp = this.array[idx1];
			this.array[idx1] = this.array[idx2];
			this.array[idx2] = temp;
			};
	}

	bubble() {
		for(let i=this.array.length;i>=0;i--) 
			for(let j = 0;j<i;j++)
				if (this.array[j] > this.array[j+1])
					this.swap(j,j+1);
	return this.array;
	}

	selection() {
		for(let i=0; i<this.array.length; i++) {
			let min = i;
			for(let j=i+1; j<this.array.length; j++)
				if (this.array[j] < this.array[min])
					min = j;
			if (min != i) {
				this.swap(min,i);
			}
		}
	return this.array;
	}

	insertion() {
		let curr = null;
		for(let i=0,j; i<this.array.length; i++) {
			curr = this.array[i];
			for(j=i-1; j>-1 && this.array[j]> curr; j--)
			this.array[j+1] = this.array[j];
		this.array[j+1] = curr;
		}
	return this.array;
	}
	
	quicksort() {
		if (this.array.length < 2)
			return this.array;
		else {
			let swap = this.swap;
			let get_pivot = (arr,low,high) => {
				let mid = Math.trunc(arr / 2);
				let pivot = high;
				if (arr[low] < arr[mid])
						pivot = mid;
					else if(arr[low] < arr[high])
						pivot = low;
				return pivot;
			};

			let qsort = (arr,low,high) => {
				if (low < high) {
					let p = partition(arr,low,high);
					qsort(arr,low,p-1);
					qsort(arr,p+1,high);
				}
			};

			let partition = (arr,low,high) => {
				if (arr.length < 2) 
					return 0;
				let pivot_idx = get_pivot(arr,low,high);
				let pivot_val = arr[pivot_idx];
				swap(pivot_idx,low);
				let border = low;
				for(let i=low;i<high+1;i++) {
					if (arr[i] < pivot_val) {
						border += 1;
						swap(i,border);
					}
				}
				swap(low,border);
			return border;
			};
			let length = this.array.length;
			qsort(this.array,0,length-1);
		}
		return this.array;
	}
}

let a = new Sort_machine([42345,324,54,1,3,543,42342,3345,263,12]);
let bubble_a = a.bubble()
let b = new Sort_machine([42,456,43,53,2325,43,6,54,634,6,57,534]);
let selection_b = b.selection()
let c = new Sort_machine([56,45,4,7,34,645,63,3,43,43,33334,634,7,534]);
let insertion_c = c.insertion()
let d = new Sort_machine([234,23,42,34,45,6734,3,66,4,5,6,534,432,42]);
let quicksort_d = d.quicksort();
console.log(bubble_a);
console.log(selection_b);
console.log(insertion_c);
console.log(quicksort_d);
