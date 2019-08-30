class TreeBuilder {
    constructor($container) {
      this.$container = $container
    }
  
    init (data) {
      this.data = data;
      this.render(this.listToTree(this.data))
      this.clickHendler()
    }

    clickHendler() {
      this.$container.addEventListener('click', (e) => {
        if (e.target.className === 'remove-node') {
          this.removeNode(e.target.getAttribute('data-id'))
        }
      })
    }

    removeNode(id) {
      this.data = this.data.filter(item => item.id !== id)
      this.render(this.listToTree(this.data))
    }

    getTemplateString(dataTree = []) {
      const itemTemplate = (item, callback) => (
        `<li>
          <span>
            ${item.id}
            <button class="remove-node" data-id="${item.id}">x</button>
          </span>
          ${callback(item.children)}
        </li>`
      );
      const _map = (dataTree) => dataTree.length ? `<ul>${dataTree.map(item => itemTemplate(item, _map))}</ul>` : '';
      return _map(dataTree);
    }

    render(dataTree) {
      this.$container.innerHTML = '';
      let templateString = this.getTemplateString(dataTree).replace(/,/g , '');
      this.$container.appendChild(document.createRange().createContextualFragment(templateString));
    }

    listToTree (arr) {
        const _createNestedArray = (items, id = 0) => {
          return items.filter(item => item['parent'] == id).map(item => (
            { ...item, children: _createNestedArray(items, item.id)}
          ));
        }
      return _createNestedArray(arr);
    }
}
