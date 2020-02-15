import * as React from 'react';

interface SomeProps {
  compiler: string;
  framework: string;
}

export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello there!</h1>
      </div>
    );
  }
}
