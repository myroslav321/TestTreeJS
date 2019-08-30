class TreeBuilder {
    constructor($container) {
      this.$container = $container
    }
  
    init (data) {
      this.render(this.listToTree(data))
    }

    getTemplateString(dataTree = []) {
      const itemTemplate = (item, callback) => `<li><span>${item.id}</span>${callback(item.children)}</li>`;
      const _map = (dataTree) => dataTree.length ? `<ul>${dataTree.map(item => itemTemplate(item, _map))}</ul>` : '';
      return _map(dataTree);
    }

    render(dataTree) {
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
