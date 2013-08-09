var app = angular.module('formEditor', []);

app.factory('FieldCatalog', function(){
  return {
    fieldTypes: [
      {
        displayName: 'Single Line Text',
        name: 'TextField',
        initial: {
          label: 'Untitled'
        }
      },
      {
        displayName: 'Paragraph Text',
        name: 'TextareaField',
        initial: {
          label: 'Untitled'
        }
      },
      {
        displayName: 'Number',
        name: 'NumberField',
        initial: {
          label: 'Number'
        }
      },
      {
        displayName: 'Checkboxes',
        name: 'CheckboxField',
        initial: {
          label: 'Check all that apply',
          choices: [
            'First Choice',
            'Second Choice',
            'Third Choice'
          ]
        }
      },
      {
        displayName: 'Multiple Choice',
        name: 'RadioField',
        initial: {
          label: 'Select a choice'
        }
      },
      {
        displayName: 'Drop Down',
        name: 'SelectField',
        initial: {
          label: 'Select a choice'
        }
      },
      {
        displayName: 'Name',
        name: 'ShortNameField',
        initial: {
          label: 'Name'
        }
      },
      {
        displayName: 'Phone',
        name: 'PhoneField',
        initial: {
          label: 'Phone'
        }
      },
      {
        displayName: 'File Upload',
        name: 'FileField',
        initial: {
          label: 'Untitled'
        }
      },
      {
        displayName: 'Address',
        name: 'AddressField',
        initial: {
          label: 'Address'
        }
      },
      {
        displayName: 'Date',
        name: 'DateField',
        initial: {
          label: 'Untitled'
        }
      },
      {
        displayName: 'Email',
        name: 'EmailField',
        initial: {
          label: 'Untitled'
        }
      },
      {
        displayName: 'Time',
        name: 'TimeField',
        initial: {
          label: 'Untitled'
        }
      },
      {
        displayName: 'Website',
        name: 'URLField',
        initial: {
          label: 'Untitled'
        }
      },
      {
        displayName: 'Price',
        name: 'MoneyField',
        initial: {
          label: 'Untitled'
        }
      },
      {
        displayName: 'Likert',
        name: 'LikertField',
        initial: {
          label: 'Untitled'
        }
      }
    ]
  }
});
app.controller('EditorController', ['$scope', 'FieldCatalog', function($scope, FieldCatalog) {
  $scope.form = {
    title: "Untitled form",
    description: "Write your description here",
    fields: []
  };

  $scope.fieldTypes = FieldCatalog.fieldTypes;

  $scope.editField = function(field) {
    $scope.editingField = field;
  };
}])
.controller('SettingsController', ['$scope', function($scope) {
  $scope.currentTab = 'addField';
  $scope.select = function(tab) {
    $scope.currentTab = tab;
    if (tab != 'fieldSettings') {
      $scope.editField(undefined);
    }
  };

  $scope.addField = function(fieldType) {
    var newField = {
      type: fieldType.name,
      label: fieldType.initial.label
    };
    $scope.form.fields.push(newField);
    $scope.editField(newField);
    $scope.select('fieldSettings');
  };
}])
.controller('PreviewFieldController', ['$scope', function($scope) {
  $scope.previewTemplate = $scope.field.type + 'Preview';
}])
.controller('EditFieldController', ['$scope', function($scope) {
  $scope.editTemplate = $scope.editingField.type + 'Edit';
}])
.directive('eatClick', function() {
  return function(scope, element, attrs) {
    $(element).click(function(event) {
      event.preventDefault();
    });
  };
})
