define({
  "layersPage": {
    "title": "ķ_Select a template to create features____________ū",
    "generalSettings": "ķ_General Settings______ū",
    "layerSettings": "ķ_Layer Settings_____ū",
    "editDescription": "ķ_Provide display text for the edit panel_____________ū",
    "editDescriptionTip": "ķ_This text is displayed above the Template picker, leave blank for no text_______________________ū.",
    "promptOnSave": "ķ_Prompt to save unsaved edits when form is closed or switched to the next record_________________________ū.",
    "promptOnSaveTip": "ķ_Display a prompt when the user clicks close or navigates to the next editable record when the current feature has unsaved edits_______________________________________ū.",
    "promptOnDelete": "ķ_Require confirmation when deleting a record______________ū.",
    "promptOnDeleteTip": "ķ_Display a prompt when the user clicks delete to confirm the aciton_____________________ū.",
    "removeOnSave": "ķ_Remove feature from selection on save____________ū.",
    "removeOnSaveTip": "ķ_Option to remove the feature from the selection set when the record is saved.  If it is the only selected record, the panel is switched back to the template page__________________________________________________ū.",
    "useFilterEditor": "ķ_Use feature template filter_________ū",
    "useFilterEditorTip": "ķ_Option to use the Filter Template picker which provides the ability to view one layers templates or search for templates by name________________________________________ū.",
    "layerSettingsTable": {
      "allowDelete": "ķ_Allow Delete_____ū",
      "allowDeleteTip": "ķ_Option to allow the user to delete a feature; disabled if the layer does not support delete____________________________ū",
      "edit": "ķ_Editable___ū",
      "editTip": "ķ_Option to include the layer in the widget_____________ū",
      "label": "ķ_Layer___ū",
      "labelTip": "ķ_Name of the layer as defined in the map_____________ū",
      "update": "ķ_Disable Geometry Editing________ū",
      "updateTip": "ķ_Option to disable the ability to move the geometry once placed or move the geometry on an existing feature_________________________________ū",
      "allowUpdateOnly": "ķ_Update Only____ū",
      "allowUpdateOnlyTip": "ķ_Option to allow only the modication of existing features, checked on by default and disabled if the layer does not support creating new features____________________________________________ū",
      "fields": "ķ_Fields___ū",
      "fieldsTip": "ķ_Modify the fields to be edited and define Smart Attributes__________________ū",
      "description": "ķ_Description____ū",
      "descriptionTip": "ķ_Optionally enter text you want to display on top of the attribute page______________________ū."
    },
    "editFieldError": "ķ_Field modifications and Smart attributes are not available to layers that are not editable____________________________ū"
  },
  "editDescriptionPage": {
    "title": "ķ_Define attribute overview text for <b>${layername}</b>__________________ū "
  },
  "fieldsPage": {
    "title": "ķ_Configure fields for <b>${layername}</b>_____________ū",
    "description": "ķ_Use the Preset column to allow the user to enter a value prior to creating a new feature. Use the Actions edit button to activate Smart Attributes on a layer. The Smart Attributes can require, hide or disable a field based on values in other fields____________________________________________________________________________ū.",
    "fieldsNotes": "ķ_* is a required field.  If you uncheck Display for this field, and the edit template does not populate that field value, you will not be able to save a new record__________________________________________________ū.",
    "fieldsSettingsTable": {
      "display": "ķ_Display___ū",
      "displayTip": "ķ_Determine whether the field is not visible______________ū",
      "edit": "ķ_Editable___ū",
      "editTip": "ķ_Check on if the field is present in the attribute form_________________ū",
      "fieldName": "ķ_Name__ū",
      "fieldNameTip": "ķ_Name of the field defined in the database_____________ū",
      "fieldAlias": "ķ_Alias___ū",
      "fieldAliasTip": "ķ_Name of the field defined in the map____________ū",
      "canPresetValue": "ķ_Preset___ū",
      "canPresetValueTip": "ķ_Option to show the field in the preset field list and allow the user to set the value prior to editing________________________________ū",
      "actions": "ķ_Actions___ū",
      "actionsTip": "ķ_Change the order of the fields or set up Smart Attributes__________________ū"
    },
    "smartAttSupport": "ķ_Smart Attributes are not supported on required database fields____________________ū"
  },
  "actionPage": {
    "title": "ķ_Configure the Smart Attribute actions for <b>${fieldname}</b>___________________ū",
    "description": "ķ_The actions are always off unless you specify the criteria on which they will be triggered.  The actions are processed in order and only one action will be triggered per field.  Use the Criteria Edit button to define the criteria______________________________________________________________________ū.",
    "actionsSettingsTable": {
      "rule": "ķ_Action___ū",
      "ruleTip": "ķ_Action performed when the criteria is satsified_______________ū",
      "expression": "ķ_Expression____ū",
      "expressionTip": "ķ_The resulting expression in SQL format from the defined criteria____________________ū",
      "actions": "ķ_Criteria___ū",
      "actionsTip": "ķ_Change the order of the rule and define the criteria when it is triggered_______________________ū"
    }
  },
  "filterPage": {
    "submitHidden": "ķ_Submit attribute data for this field even when hidden_________________ū?",
    "title": "ķ_Configure clause for the ${action} rule_____________ū",
    "filterBuilder": "ķ_Set action on field when record matches ${any_or_all} of the following expressions__________________________ū",
    "noFilterTip": "ķ_Using the tools below, define the statement for when the action is active_______________________ū."
  }
});