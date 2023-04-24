import {css} from 'lit';

const styles = css`
:host {
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 0.25rem;
  border-radius: 0.25rem;
  padding: 0.25rem;
  height: 4rem;
  width: 20rem;
  transition: background-color 0.2s;
  cursor: pointer;
}

:host([color="dark"]) {
  background-color: #333;
  color: #fff;
}

:host([color="dark"]:hover) {
  background-color: #555;
  color: #fff;
}

:host([color="light"]) {
  background-color: #eee;
  color: #333;
}

:host([color="light"]:hover) {
  background-color: #ccc;
  color: #333;
}
`;

export default styles;
