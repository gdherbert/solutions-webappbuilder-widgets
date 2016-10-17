define({
  "layersPage": {
    "title": "Ă_Select a template to create features____________ș",
    "generalSettings": "Ă_General Settings______ș",
    "layerSettings": "Ă_Layer Settings_____ș",
    "editDescription": "Ă_Provide display text for the edit panel_____________ș",
    "editDescriptionTip": "Ă_This text is displayed above the Template picker, leave blank for no text_______________________ș.",
    "promptOnSave": "Ă_Prompt to save unsaved edits when form is closed or switched to the next record_________________________ș.",
    "promptOnSaveTip": "Ă_Display a prompt when the user clicks close or navigates to the next editable record when the current feature has unsaved edits_______________________________________ș.",
    "promptOnDelete": "Ă_Require confirmation when deleting a record______________ș.",
    "promptOnDeleteTip": "Ă_Display a prompt when the user clicks delete to confirm the aciton_____________________ș.",
    "removeOnSave": "Ă_Remove feature from selection on save____________ș.",
    "removeOnSaveTip": "Ă_Option to remove the feature from the selection set when the record is saved.  If it is the only selected record, the panel is switched back to the template page__________________________________________________ș.",
    "useFilterEditor": "Ă_Use feature template filter_________ș",
    "useFilterEditorTip": "Ă_Option to use the Filter Template picker which provides the ability to view one layers templates or search for templates by name________________________________________ș.",
    "layerSettingsTable": {
      "allowDelete": "Ă_Allow Delete_____ș",
      "allowDeleteTip": "Ă_Option to allow the user to delete a feature; disabled if the layer does not support delete____________________________ș",
      "edit": "Ă_Editable___ș",
      "editTip": "Ă_Option to include the layer in the widget_____________ș",
      "label": "Ă_Layer___ș",
      "labelTip": "Ă_Name of the layer as defined in the map_____________ș",
      "update": "Ă_Disable Geometry Editing________ș",
      "updateTip": "Ă_Option to disable the ability to move the geometry once placed or move the geometry on an existing feature_________________________________ș",
      "allowUpdateOnly": "Ă_Update Only____ș",
      "allowUpdateOnlyTip": "Ă_Option to allow only the modication of existing features, checked on by default and disabled if the layer does not support creating new features____________________________________________ș",
      "fields": "Ă_Fields___ș",
      "fieldsTip": "Ă_Modify the fields to be edited and define Smart Attributes__________________ș",
      "description": "Ă_Description____ș",
      "descriptionTip": "Ă_Optionally enter text you want to display on top of the attribute page______________________ș."
    },
    "editFieldError": "Ă_Field modifications and Smart attributes are not available to layers that are not editable____________________________ș"
  },
  "editDescriptionPage": {
    "title": "Ă_Define attribute overview text for <b>${layername}</b>__________________ș "
  },
  "fieldsPage": {
    "title": "Ă_Configure fields for <b>${layername}</b>_____________ș",
    "description": "Ă_Use the Preset column to allow the user to enter a value prior to creating a new feature. Use the Actions edit button to activate Smart Attributes on a layer. The Smart Attributes can require, hide or disable a field based on values in other fields____________________________________________________________________________ș.",
    "fieldsNotes": "Ă_* is a required field.  If you uncheck Display for this field, and the edit template does not populate that field value, you will not be able to save a new record__________________________________________________ș.",
    "fieldsSettingsTable": {
      "display": "Ă_Display___ș",
      "displayTip": "Ă_Determine whether the field is not visible______________ș",
      "edit": "Ă_Editable___ș",
      "editTip": "Ă_Check on if the field is present in the attribute form_________________ș",
      "fieldName": "Ă_Name__ș",
      "fieldNameTip": "Ă_Name of the field defined in the database_____________ș",
      "fieldAlias": "Ă_Alias___ș",
      "fieldAliasTip": "Ă_Name of the field defined in the map____________ș",
      "canPresetValue": "Ă_Preset___ș",
      "canPresetValueTip": "Ă_Option to show the field in the preset field list and allow the user to set the value prior to editing________________________________ș",
      "actions": "Ă_Actions___ș",
      "actionsTip": "Ă_Change the order of the fields or set up Smart Attributes__________________ș"
    },
    "smartAttSupport": "Ă_Smart Attributes are not supported on required database fields____________________ș"
  },
  "actionPage": {
    "title": "Ă_Configure the Smart Attribute actions for <b>${fieldname}</b>___________________ș",
    "description": "Ă_The actions are always off unless you specify the criteria on which they will be triggered.  The actions are processed in order and only one action will be triggered per field.  Use the Criteria Edit button to define the criteria______________________________________________________________________ș.",
    "actionsSettingsTable": {
      "rule": "Ă_Action___ș",
      "ruleTip": "Ă_Action performed when the criteria is satsified_______________ș",
      "expression": "Ă_Expression____ș",
      "expressionTip": "Ă_The resulting expression in SQL format from the defined criteria____________________ș",
      "actions": "Ă_Criteria___ș",
      "actionsTip": "Ă_Change the order of the rule and define the criteria when it is triggered_______________________ș"
    }
  },
  "filterPage": {
    "submitHidden": "Ă_Submit attribute data for this field even when hidden_________________ș?",
    "title": "Ă_Configure clause for the ${action} rule_____________ș",
    "filterBuilder": "Ă_Set action on field when record matches ${any_or_all} of the following expressions__________________________ș",
    "noFilterTip": "Ă_Using the tools below, define the statement for when the action is active_______________________ș."
  }
});