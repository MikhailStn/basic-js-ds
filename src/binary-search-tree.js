const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.head = null;
  }

  root() {
    return this.head;
  }

  add(data) {
    function addElement(node, data) {
      if (!node) {
        return new Node(data);
      } else if (node.data == data) {
        return node;
      } else if (node.data < data) {
        node.right = addElement(node.right, data);
      } else {
        node.left = addElement(node.left, data);
      }
      return node;
    }
    this.head = addElement(this.head, data);
  }

  has(data) {
    function findData(node, data) {
      if (!node) {
        return false;
      } else if (node.data == data) {
        return true;
      } else if (node.data < data) {
        return findData(node.right, data);
      } else {
        return findData(node.left, data);
      }
    }
    return findData(this.head, data);
  }

  find(data) {
    function findData(node, data) {
      if (!node) {
        return null;
      } else if (node.data == data) {
        return node;
      } else if (node.data < data) {
        return findData(node.right, data);
      } else {
        return findData(node.left, data);
      }
    }
    return findData(this.head, data);
  }

  remove(data) {
    function removeNode(node, data) {
      if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else if (node.data > data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        } else if (!node.left) {
          return node.right;
        } else if (!node.right) {
          return node.left;
        }
        let currData = node.right;
        while (currData.left) {
          currData = currData.left;
        }
        node.data = currData.data;
        node.right = removeNode(node.right, currData.data);
        return node;
      }
    }
    return removeNode(this.head, data);
  }

  min() {
    function findMin(node) {
      if (node.left) {
        return findMin(node.left);
      } else {
        return node.data;
      }
    }
    return findMin(this.head);
  }

  max() {
    function findMax(node) {
      if (node.right) {
        return findMax(node.right);
      } else {
        return node.data;
      }
    }
    return findMax(this.head);
  }
}

module.exports = {
  BinarySearchTree,
};