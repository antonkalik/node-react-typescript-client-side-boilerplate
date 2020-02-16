import * as React from 'react';

interface SortInterface {
  length: number;
  data: number[];
}

export class App extends React.Component {
  componentDidMount(): void {
    const result = new Sort([4, 2, 5, 9]);
    console.log(result.data);
  }

  render() {
    return (
      <div>
        <h1>Hello there!</h1>
      </div>
    );
  }
}

class Sort implements SortInterface {
  constructor(public data: number[]) {
    console.log('initData:', data);
    if (this.length > 1) {
      this.sort();
    }
  }

  get length(): number {
    return this.data.length;
  }

  private sort = (): void => {
    for (let i = 0; i < this.length; i++) {
      for (let j = this.length; j > i; j--) {
        if (this.compare(i, j)) {
          this.swap(i, j);
        }
      }
    }
  };

  private compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  private swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
