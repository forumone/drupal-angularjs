<div ng-app="nodelist">
  <script type="text/ng-template" id="list.html">
    <select name="node_type" ng-model="nodetype">
      <?php foreach ($types as $type => $name) :?>
      <option value="<?php print $type; ?>"><?php print $name; ?></option>
      <?php endforeach; ?>
    </select>
    <table class="sticky-enabled table-select-processed tableheader-processed sticky-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Type</th>
          <th>Author</th>
          <th>Status</th>
          <th>Updated</th>
          <th>Promote</th>
        </tr>
      </thead>
      <tbody>
        <tr ng-repeat="node in nodes.list">
          <td>{{node.title}}</td>
          <td>{{node.type}}</td>
          <td>{{node.author.id}}</td>
          <td><span ng-switch on="node.status">
              <span ng-switch-when="1">Active</span>
              <span ng-switch-when="0">Inactive</span>
          </span></td>
          <td>{{node.updated | date:'medium'}}</td>
          <td><span ng-switch on="node.promote">
            <button ng-switch-when="1" ng-click="promote(node, 0)">Unpromote</button>
            <button ng-switch-when="0" ng-click="promote(node, 1)">Promote</button>
          </span></td>
        </tr>
      </tbody>
    </table>
  </script>
  <div ng-view></div>
</div>