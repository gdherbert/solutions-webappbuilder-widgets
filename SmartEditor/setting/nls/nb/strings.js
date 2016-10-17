define({
  "layersPage": {
    "title": "å_Select a template to create features____________ø",
    "generalSettings": "å_General Settings______ø",
    "layerSettings": "å_Layer Settings_____ø",
    "editDescription": "å_Provide display text for the edit panel_____________ø",
    "editDescriptionTip": "å_This text is displayed above the Template picker, leave blank for no text_______________________ø.",
    "promptOnSave": "å_Prompt to save unsaved edits when form is closed or switched to the next record_________________________ø.",
    "promptOnSaveTip": "å_Display a prompt when the user clicks close or navigates to the next editable record when the current feature has unsaved edits_______________________________________ø.",
    "promptOnDelete": "å_Require confirmation when deleting a record______________ø.",
    "promptOnDeleteTip": "å_Display a prompt when the user clicks delete to confirm the aciton_____________________ø.",
    "removeOnSave": "å_Remove feature from selection on save____________ø.",
    "removeOnSaveTip": "å_Option to remove the feature from the selection set when the record is saved.  If it is the only selected record, the panel is switched back to the template page__________________________________________________ø.",
    "useFilterEditor": "å_Use feature template filter_________ø",
    "useFilterEditorTip": "å_Option to use the Filter Template picker which provides the ability to view one layers templates or search for templates by name________________________________________ø.",
    "layerSettingsTable": {
      "allowDelete": "å_Allow Delete_____ø",
      "allowDeleteTip": "å_Option to allow the user to delete a feature; disabled if the layer does not support delete____________________________ø",
      "edit": "å_Editable___ø",
      "editTip": "å_Option to include the layer in the widget_____________ø",
      "label": "å_Layer___ø",
      "labelTip": "å_Name of the layer as defined in the map_____________ø",
      "update": "å_Disable Geometry Editing________ø",
      "updateTip": "å_Option to disable the ability to move the geometry once placed or move the geometry on an existing feature_________________________________ø",
      "allowUpdateOnly": "å_Update Only____ø",
      "allowUpdateOnlyTip": "å_Option to allow only the modication of existing features, checked on by default and disabled if the layer does not support creating new features____________________________________________ø",
      "fields": "å_Fields___ø",
      "fieldsTip": "å_Modify the fields to be edited and define Smart Attributes__________________ø",
      "description": "å_Description____ø",
      "descriptionTip": "å_Optionally enter text you want to display on top of the attribute page______________________ø."
    },
    "editFieldError": "å_Field modifications and Smart attributes are not available to layers that are not editable____________________________ø"
  },
  "editDescriptionPage": {
    "title": "å_Define attribute overview text for <b>${layername}</b>__________________ø "
  },
  "fieldsPage": {
    "title": "å_Configure fields for <b>${layername}</b>_____________ø",
    "description": "å_Use the Preset column to allow the user to enter a value prior to creating a new feature. Use the Actions edit button to activate Smart Attributes on a layer. The Smart Attributes can require, hide or disable a field based on values in other fields____________________________________________________________________________ø.",
    "fieldsNotes": "å_* is a required field.  If you uncheck Display for this field, and the edit template does not populate that field value, you will not be able to save a new record__________________________________________________ø.",
    "fieldsSettingsTable": {
      "display": "å_Display___ø",
      "displayTip": "å_Determine whether the field is not visible______________ø",
      "edit": "å_Editable___ø",
      "editTip": "å_Check on if the field is present in the attribute form_________________ø",
      "fieldName": "å_Name__ø",
      "fieldNameTip": "å_Name of the field defined in the database_____________ø",
      "fieldAlias": "å_Alias___ø",
      "fieldAliasTip": "å_Name of the field defined in the map____________ø",
      "canPresetValue": "å_Preset___ø",
      "canPresetValueTip": "å_Option to show the field in the preset field list and allow the user to set the value prior to editing________________________________ø",
      "actions": "å_Actions___ø",
      "actionsTip": "å_Change the order of the fields or set up Smart Attributes__________________ø"
    },
    "smartAttSupport": "å_Smart Attributes are not supported on required database fields____________________ø"
  },
  "actionPage": {
    "title": "å_Configure the Smart Attribute actions for <b>${fieldname}</b>___________________ø",
    "description": "å_The actions are always off unless you specify the criteria on which they will be triggered.  The actions are processed in order and only one action will be triggered per field.  Use the Criteria Edit button to define the criteria______________________________________________________________________ø.",
    "actionsSettingsTable": {
      "rule": "å_Action___ø",
      "ruleTip": "å_Action performed when the criteria is satsified_______________ø",
      "expression": "å_Expression____ø",
      "expressionTip": "å_The resulting expression in SQL format from the defined criteria____________________ø",
      "actions": "å_Criteria___ø",
      "actionsTip": "å_Change the order of the rule and define the criteria when it is triggered_______________________ø"
    }
  },
  "filterPage": {
    "submitHidden": "å_Submit attribute data for this field even when hidden_________________ø?",
    "title": "å_Configure clause for the ${action} rule_____________ø",
    "filterBuilder": "å_Set action on field when record matches ${any_or_all} of the following expressions__________________________ø",
    "noFilterTip": "å_Using the tools below, define the statement for when the action is active_______________________ø."
  }
});