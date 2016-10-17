define({
  "layersPage": {
    "title": "Å_Select a template to create features____________ö",
    "generalSettings": "Å_General Settings______ö",
    "layerSettings": "Å_Layer Settings_____ö",
    "editDescription": "Å_Provide display text for the edit panel_____________ö",
    "editDescriptionTip": "Å_This text is displayed above the Template picker, leave blank for no text_______________________ö.",
    "promptOnSave": "Å_Prompt to save unsaved edits when form is closed or switched to the next record_________________________ö.",
    "promptOnSaveTip": "Å_Display a prompt when the user clicks close or navigates to the next editable record when the current feature has unsaved edits_______________________________________ö.",
    "promptOnDelete": "Å_Require confirmation when deleting a record______________ö.",
    "promptOnDeleteTip": "Å_Display a prompt when the user clicks delete to confirm the aciton_____________________ö.",
    "removeOnSave": "Å_Remove feature from selection on save____________ö.",
    "removeOnSaveTip": "Å_Option to remove the feature from the selection set when the record is saved.  If it is the only selected record, the panel is switched back to the template page__________________________________________________ö.",
    "useFilterEditor": "Å_Use feature template filter_________ö",
    "useFilterEditorTip": "Å_Option to use the Filter Template picker which provides the ability to view one layers templates or search for templates by name________________________________________ö.",
    "layerSettingsTable": {
      "allowDelete": "Å_Allow Delete_____ö",
      "allowDeleteTip": "Å_Option to allow the user to delete a feature; disabled if the layer does not support delete____________________________ö",
      "edit": "Å_Editable___ö",
      "editTip": "Å_Option to include the layer in the widget_____________ö",
      "label": "Å_Layer___ö",
      "labelTip": "Å_Name of the layer as defined in the map_____________ö",
      "update": "Å_Disable Geometry Editing________ö",
      "updateTip": "Å_Option to disable the ability to move the geometry once placed or move the geometry on an existing feature_________________________________ö",
      "allowUpdateOnly": "Å_Update Only____ö",
      "allowUpdateOnlyTip": "Å_Option to allow only the modication of existing features, checked on by default and disabled if the layer does not support creating new features____________________________________________ö",
      "fields": "Å_Fields___ö",
      "fieldsTip": "Å_Modify the fields to be edited and define Smart Attributes__________________ö",
      "description": "Å_Description____ö",
      "descriptionTip": "Å_Optionally enter text you want to display on top of the attribute page______________________ö."
    },
    "editFieldError": "Å_Field modifications and Smart attributes are not available to layers that are not editable____________________________ö"
  },
  "editDescriptionPage": {
    "title": "Å_Define attribute overview text for <b>${layername}</b>__________________ö "
  },
  "fieldsPage": {
    "title": "Å_Configure fields for <b>${layername}</b>_____________ö",
    "description": "Å_Use the Preset column to allow the user to enter a value prior to creating a new feature. Use the Actions edit button to activate Smart Attributes on a layer. The Smart Attributes can require, hide or disable a field based on values in other fields____________________________________________________________________________ö.",
    "fieldsNotes": "Å_* is a required field.  If you uncheck Display for this field, and the edit template does not populate that field value, you will not be able to save a new record__________________________________________________ö.",
    "fieldsSettingsTable": {
      "display": "Å_Display___ö",
      "displayTip": "Å_Determine whether the field is not visible______________ö",
      "edit": "Å_Editable___ö",
      "editTip": "Å_Check on if the field is present in the attribute form_________________ö",
      "fieldName": "Å_Name__ö",
      "fieldNameTip": "Å_Name of the field defined in the database_____________ö",
      "fieldAlias": "Å_Alias___ö",
      "fieldAliasTip": "Å_Name of the field defined in the map____________ö",
      "canPresetValue": "Å_Preset___ö",
      "canPresetValueTip": "Å_Option to show the field in the preset field list and allow the user to set the value prior to editing________________________________ö",
      "actions": "Å_Actions___ö",
      "actionsTip": "Å_Change the order of the fields or set up Smart Attributes__________________ö"
    },
    "smartAttSupport": "Å_Smart Attributes are not supported on required database fields____________________ö"
  },
  "actionPage": {
    "title": "Å_Configure the Smart Attribute actions for <b>${fieldname}</b>___________________ö",
    "description": "Å_The actions are always off unless you specify the criteria on which they will be triggered.  The actions are processed in order and only one action will be triggered per field.  Use the Criteria Edit button to define the criteria______________________________________________________________________ö.",
    "actionsSettingsTable": {
      "rule": "Å_Action___ö",
      "ruleTip": "Å_Action performed when the criteria is satsified_______________ö",
      "expression": "Å_Expression____ö",
      "expressionTip": "Å_The resulting expression in SQL format from the defined criteria____________________ö",
      "actions": "Å_Criteria___ö",
      "actionsTip": "Å_Change the order of the rule and define the criteria when it is triggered_______________________ö"
    }
  },
  "filterPage": {
    "submitHidden": "Å_Submit attribute data for this field even when hidden_________________ö?",
    "title": "Å_Configure clause for the ${action} rule_____________ö",
    "filterBuilder": "Å_Set action on field when record matches ${any_or_all} of the following expressions__________________________ö",
    "noFilterTip": "Å_Using the tools below, define the statement for when the action is active_______________________ö."
  }
});