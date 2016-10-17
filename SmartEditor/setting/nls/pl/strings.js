define({
  "layersPage": {
    "title": "ł_Select a template to create features____________ą",
    "generalSettings": "ł_General Settings______ą",
    "layerSettings": "ł_Layer Settings_____ą",
    "editDescription": "ł_Provide display text for the edit panel_____________ą",
    "editDescriptionTip": "ł_This text is displayed above the Template picker, leave blank for no text_______________________ą.",
    "promptOnSave": "ł_Prompt to save unsaved edits when form is closed or switched to the next record_________________________ą.",
    "promptOnSaveTip": "ł_Display a prompt when the user clicks close or navigates to the next editable record when the current feature has unsaved edits_______________________________________ą.",
    "promptOnDelete": "ł_Require confirmation when deleting a record______________ą.",
    "promptOnDeleteTip": "ł_Display a prompt when the user clicks delete to confirm the aciton_____________________ą.",
    "removeOnSave": "ł_Remove feature from selection on save____________ą.",
    "removeOnSaveTip": "ł_Option to remove the feature from the selection set when the record is saved.  If it is the only selected record, the panel is switched back to the template page__________________________________________________ą.",
    "useFilterEditor": "ł_Use feature template filter_________ą",
    "useFilterEditorTip": "ł_Option to use the Filter Template picker which provides the ability to view one layers templates or search for templates by name________________________________________ą.",
    "layerSettingsTable": {
      "allowDelete": "ł_Allow Delete_____ą",
      "allowDeleteTip": "ł_Option to allow the user to delete a feature; disabled if the layer does not support delete____________________________ą",
      "edit": "ł_Editable___ą",
      "editTip": "ł_Option to include the layer in the widget_____________ą",
      "label": "ł_Layer___ą",
      "labelTip": "ł_Name of the layer as defined in the map_____________ą",
      "update": "ł_Disable Geometry Editing________ą",
      "updateTip": "ł_Option to disable the ability to move the geometry once placed or move the geometry on an existing feature_________________________________ą",
      "allowUpdateOnly": "ł_Update Only____ą",
      "allowUpdateOnlyTip": "ł_Option to allow only the modication of existing features, checked on by default and disabled if the layer does not support creating new features____________________________________________ą",
      "fields": "ł_Fields___ą",
      "fieldsTip": "ł_Modify the fields to be edited and define Smart Attributes__________________ą",
      "description": "ł_Description____ą",
      "descriptionTip": "ł_Optionally enter text you want to display on top of the attribute page______________________ą."
    },
    "editFieldError": "ł_Field modifications and Smart attributes are not available to layers that are not editable____________________________ą"
  },
  "editDescriptionPage": {
    "title": "ł_Define attribute overview text for <b>${layername}</b>__________________ą "
  },
  "fieldsPage": {
    "title": "ł_Configure fields for <b>${layername}</b>_____________ą",
    "description": "ł_Use the Preset column to allow the user to enter a value prior to creating a new feature. Use the Actions edit button to activate Smart Attributes on a layer. The Smart Attributes can require, hide or disable a field based on values in other fields____________________________________________________________________________ą.",
    "fieldsNotes": "ł_* is a required field.  If you uncheck Display for this field, and the edit template does not populate that field value, you will not be able to save a new record__________________________________________________ą.",
    "fieldsSettingsTable": {
      "display": "ł_Display___ą",
      "displayTip": "ł_Determine whether the field is not visible______________ą",
      "edit": "ł_Editable___ą",
      "editTip": "ł_Check on if the field is present in the attribute form_________________ą",
      "fieldName": "ł_Name__ą",
      "fieldNameTip": "ł_Name of the field defined in the database_____________ą",
      "fieldAlias": "ł_Alias___ą",
      "fieldAliasTip": "ł_Name of the field defined in the map____________ą",
      "canPresetValue": "ł_Preset___ą",
      "canPresetValueTip": "ł_Option to show the field in the preset field list and allow the user to set the value prior to editing________________________________ą",
      "actions": "ł_Actions___ą",
      "actionsTip": "ł_Change the order of the fields or set up Smart Attributes__________________ą"
    },
    "smartAttSupport": "ł_Smart Attributes are not supported on required database fields____________________ą"
  },
  "actionPage": {
    "title": "ł_Configure the Smart Attribute actions for <b>${fieldname}</b>___________________ą",
    "description": "ł_The actions are always off unless you specify the criteria on which they will be triggered.  The actions are processed in order and only one action will be triggered per field.  Use the Criteria Edit button to define the criteria______________________________________________________________________ą.",
    "actionsSettingsTable": {
      "rule": "ł_Action___ą",
      "ruleTip": "ł_Action performed when the criteria is satsified_______________ą",
      "expression": "ł_Expression____ą",
      "expressionTip": "ł_The resulting expression in SQL format from the defined criteria____________________ą",
      "actions": "ł_Criteria___ą",
      "actionsTip": "ł_Change the order of the rule and define the criteria when it is triggered_______________________ą"
    }
  },
  "filterPage": {
    "submitHidden": "ł_Submit attribute data for this field even when hidden_________________ą?",
    "title": "ł_Configure clause for the ${action} rule_____________ą",
    "filterBuilder": "ł_Set action on field when record matches ${any_or_all} of the following expressions__________________________ą",
    "noFilterTip": "ł_Using the tools below, define the statement for when the action is active_______________________ą."
  }
});