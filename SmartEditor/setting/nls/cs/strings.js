define({
  "layersPage": {
    "title": "Ř_Select a template to create features____________ů",
    "generalSettings": "Ř_General Settings______ů",
    "layerSettings": "Ř_Layer Settings_____ů",
    "editDescription": "Ř_Provide display text for the edit panel_____________ů",
    "editDescriptionTip": "Ř_This text is displayed above the Template picker, leave blank for no text_______________________ů.",
    "promptOnSave": "Ř_Prompt to save unsaved edits when form is closed or switched to the next record_________________________ů.",
    "promptOnSaveTip": "Ř_Display a prompt when the user clicks close or navigates to the next editable record when the current feature has unsaved edits_______________________________________ů.",
    "promptOnDelete": "Ř_Require confirmation when deleting a record______________ů.",
    "promptOnDeleteTip": "Ř_Display a prompt when the user clicks delete to confirm the aciton_____________________ů.",
    "removeOnSave": "Ř_Remove feature from selection on save____________ů.",
    "removeOnSaveTip": "Ř_Option to remove the feature from the selection set when the record is saved.  If it is the only selected record, the panel is switched back to the template page__________________________________________________ů.",
    "useFilterEditor": "Ř_Use feature template filter_________ů",
    "useFilterEditorTip": "Ř_Option to use the Filter Template picker which provides the ability to view one layers templates or search for templates by name________________________________________ů.",
    "layerSettingsTable": {
      "allowDelete": "Ř_Allow Delete_____ů",
      "allowDeleteTip": "Ř_Option to allow the user to delete a feature; disabled if the layer does not support delete____________________________ů",
      "edit": "Ř_Editable___ů",
      "editTip": "Ř_Option to include the layer in the widget_____________ů",
      "label": "Ř_Layer___ů",
      "labelTip": "Ř_Name of the layer as defined in the map_____________ů",
      "update": "Ř_Disable Geometry Editing________ů",
      "updateTip": "Ř_Option to disable the ability to move the geometry once placed or move the geometry on an existing feature_________________________________ů",
      "allowUpdateOnly": "Ř_Update Only____ů",
      "allowUpdateOnlyTip": "Ř_Option to allow only the modication of existing features, checked on by default and disabled if the layer does not support creating new features____________________________________________ů",
      "fields": "Ř_Fields___ů",
      "fieldsTip": "Ř_Modify the fields to be edited and define Smart Attributes__________________ů",
      "description": "Ř_Description____ů",
      "descriptionTip": "Ř_Optionally enter text you want to display on top of the attribute page______________________ů."
    },
    "editFieldError": "Ř_Field modifications and Smart attributes are not available to layers that are not editable____________________________ů"
  },
  "editDescriptionPage": {
    "title": "Ř_Define attribute overview text for <b>${layername}</b>__________________ů "
  },
  "fieldsPage": {
    "title": "Ř_Configure fields for <b>${layername}</b>_____________ů",
    "description": "Ř_Use the Preset column to allow the user to enter a value prior to creating a new feature. Use the Actions edit button to activate Smart Attributes on a layer. The Smart Attributes can require, hide or disable a field based on values in other fields____________________________________________________________________________ů.",
    "fieldsNotes": "Ř_* is a required field.  If you uncheck Display for this field, and the edit template does not populate that field value, you will not be able to save a new record__________________________________________________ů.",
    "fieldsSettingsTable": {
      "display": "Ř_Display___ů",
      "displayTip": "Ř_Determine whether the field is not visible______________ů",
      "edit": "Ř_Editable___ů",
      "editTip": "Ř_Check on if the field is present in the attribute form_________________ů",
      "fieldName": "Ř_Name__ů",
      "fieldNameTip": "Ř_Name of the field defined in the database_____________ů",
      "fieldAlias": "Ř_Alias___ů",
      "fieldAliasTip": "Ř_Name of the field defined in the map____________ů",
      "canPresetValue": "Ř_Preset___ů",
      "canPresetValueTip": "Ř_Option to show the field in the preset field list and allow the user to set the value prior to editing________________________________ů",
      "actions": "Ř_Actions___ů",
      "actionsTip": "Ř_Change the order of the fields or set up Smart Attributes__________________ů"
    },
    "smartAttSupport": "Ř_Smart Attributes are not supported on required database fields____________________ů"
  },
  "actionPage": {
    "title": "Ř_Configure the Smart Attribute actions for <b>${fieldname}</b>___________________ů",
    "description": "Ř_The actions are always off unless you specify the criteria on which they will be triggered.  The actions are processed in order and only one action will be triggered per field.  Use the Criteria Edit button to define the criteria______________________________________________________________________ů.",
    "actionsSettingsTable": {
      "rule": "Ř_Action___ů",
      "ruleTip": "Ř_Action performed when the criteria is satsified_______________ů",
      "expression": "Ř_Expression____ů",
      "expressionTip": "Ř_The resulting expression in SQL format from the defined criteria____________________ů",
      "actions": "Ř_Criteria___ů",
      "actionsTip": "Ř_Change the order of the rule and define the criteria when it is triggered_______________________ů"
    }
  },
  "filterPage": {
    "submitHidden": "Ř_Submit attribute data for this field even when hidden_________________ů?",
    "title": "Ř_Configure clause for the ${action} rule_____________ů",
    "filterBuilder": "Ř_Set action on field when record matches ${any_or_all} of the following expressions__________________________ů",
    "noFilterTip": "Ř_Using the tools below, define the statement for when the action is active_______________________ů."
  }
});