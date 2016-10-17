define({
  "layersPage": {
    "title": "Č_Select a template to create features____________ž",
    "generalSettings": "Č_General Settings______ž",
    "layerSettings": "Č_Layer Settings_____ž",
    "editDescription": "Č_Provide display text for the edit panel_____________ž",
    "editDescriptionTip": "Č_This text is displayed above the Template picker, leave blank for no text_______________________ž.",
    "promptOnSave": "Č_Prompt to save unsaved edits when form is closed or switched to the next record_________________________ž.",
    "promptOnSaveTip": "Č_Display a prompt when the user clicks close or navigates to the next editable record when the current feature has unsaved edits_______________________________________ž.",
    "promptOnDelete": "Č_Require confirmation when deleting a record______________ž.",
    "promptOnDeleteTip": "Č_Display a prompt when the user clicks delete to confirm the aciton_____________________ž.",
    "removeOnSave": "Č_Remove feature from selection on save____________ž.",
    "removeOnSaveTip": "Č_Option to remove the feature from the selection set when the record is saved.  If it is the only selected record, the panel is switched back to the template page__________________________________________________ž.",
    "useFilterEditor": "Č_Use feature template filter_________ž",
    "useFilterEditorTip": "Č_Option to use the Filter Template picker which provides the ability to view one layers templates or search for templates by name________________________________________ž.",
    "layerSettingsTable": {
      "allowDelete": "Č_Allow Delete_____ž",
      "allowDeleteTip": "Č_Option to allow the user to delete a feature; disabled if the layer does not support delete____________________________ž",
      "edit": "Č_Editable___ž",
      "editTip": "Č_Option to include the layer in the widget_____________ž",
      "label": "Č_Layer___ž",
      "labelTip": "Č_Name of the layer as defined in the map_____________ž",
      "update": "Č_Disable Geometry Editing________ž",
      "updateTip": "Č_Option to disable the ability to move the geometry once placed or move the geometry on an existing feature_________________________________ž",
      "allowUpdateOnly": "Č_Update Only____ž",
      "allowUpdateOnlyTip": "Č_Option to allow only the modication of existing features, checked on by default and disabled if the layer does not support creating new features____________________________________________ž",
      "fields": "Č_Fields___ž",
      "fieldsTip": "Č_Modify the fields to be edited and define Smart Attributes__________________ž",
      "description": "Č_Description____ž",
      "descriptionTip": "Č_Optionally enter text you want to display on top of the attribute page______________________ž."
    },
    "editFieldError": "Č_Field modifications and Smart attributes are not available to layers that are not editable____________________________ž"
  },
  "editDescriptionPage": {
    "title": "Č_Define attribute overview text for <b>${layername}</b>__________________ž "
  },
  "fieldsPage": {
    "title": "Č_Configure fields for <b>${layername}</b>_____________ž",
    "description": "Č_Use the Preset column to allow the user to enter a value prior to creating a new feature. Use the Actions edit button to activate Smart Attributes on a layer. The Smart Attributes can require, hide or disable a field based on values in other fields____________________________________________________________________________ž.",
    "fieldsNotes": "Č_* is a required field.  If you uncheck Display for this field, and the edit template does not populate that field value, you will not be able to save a new record__________________________________________________ž.",
    "fieldsSettingsTable": {
      "display": "Č_Display___ž",
      "displayTip": "Č_Determine whether the field is not visible______________ž",
      "edit": "Č_Editable___ž",
      "editTip": "Č_Check on if the field is present in the attribute form_________________ž",
      "fieldName": "Č_Name__ž",
      "fieldNameTip": "Č_Name of the field defined in the database_____________ž",
      "fieldAlias": "Č_Alias___ž",
      "fieldAliasTip": "Č_Name of the field defined in the map____________ž",
      "canPresetValue": "Č_Preset___ž",
      "canPresetValueTip": "Č_Option to show the field in the preset field list and allow the user to set the value prior to editing________________________________ž",
      "actions": "Č_Actions___ž",
      "actionsTip": "Č_Change the order of the fields or set up Smart Attributes__________________ž"
    },
    "smartAttSupport": "Č_Smart Attributes are not supported on required database fields____________________ž"
  },
  "actionPage": {
    "title": "Č_Configure the Smart Attribute actions for <b>${fieldname}</b>___________________ž",
    "description": "Č_The actions are always off unless you specify the criteria on which they will be triggered.  The actions are processed in order and only one action will be triggered per field.  Use the Criteria Edit button to define the criteria______________________________________________________________________ž.",
    "actionsSettingsTable": {
      "rule": "Č_Action___ž",
      "ruleTip": "Č_Action performed when the criteria is satsified_______________ž",
      "expression": "Č_Expression____ž",
      "expressionTip": "Č_The resulting expression in SQL format from the defined criteria____________________ž",
      "actions": "Č_Criteria___ž",
      "actionsTip": "Č_Change the order of the rule and define the criteria when it is triggered_______________________ž"
    }
  },
  "filterPage": {
    "submitHidden": "Č_Submit attribute data for this field even when hidden_________________ž?",
    "title": "Č_Configure clause for the ${action} rule_____________ž",
    "filterBuilder": "Č_Set action on field when record matches ${any_or_all} of the following expressions__________________________ž",
    "noFilterTip": "Č_Using the tools below, define the statement for when the action is active_______________________ž."
  }
});