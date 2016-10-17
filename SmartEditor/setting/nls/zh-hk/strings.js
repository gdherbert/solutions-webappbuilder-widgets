define({
  "layersPage": {
    "title": "試_Select a template to create features____________驗",
    "generalSettings": "試_General Settings______驗",
    "layerSettings": "試_Layer Settings_____驗",
    "editDescription": "試_Provide display text for the edit panel_____________驗",
    "editDescriptionTip": "試_This text is displayed above the Template picker, leave blank for no text_______________________驗.",
    "promptOnSave": "試_Prompt to save unsaved edits when form is closed or switched to the next record_________________________驗.",
    "promptOnSaveTip": "試_Display a prompt when the user clicks close or navigates to the next editable record when the current feature has unsaved edits_______________________________________驗.",
    "promptOnDelete": "試_Require confirmation when deleting a record______________驗.",
    "promptOnDeleteTip": "試_Display a prompt when the user clicks delete to confirm the aciton_____________________驗.",
    "removeOnSave": "試_Remove feature from selection on save____________驗.",
    "removeOnSaveTip": "試_Option to remove the feature from the selection set when the record is saved.  If it is the only selected record, the panel is switched back to the template page__________________________________________________驗.",
    "useFilterEditor": "試_Use feature template filter_________驗",
    "useFilterEditorTip": "試_Option to use the Filter Template picker which provides the ability to view one layers templates or search for templates by name________________________________________驗.",
    "layerSettingsTable": {
      "allowDelete": "試_Allow Delete_____驗",
      "allowDeleteTip": "試_Option to allow the user to delete a feature; disabled if the layer does not support delete____________________________驗",
      "edit": "試_Editable___驗",
      "editTip": "試_Option to include the layer in the widget_____________驗",
      "label": "試_Layer___驗",
      "labelTip": "試_Name of the layer as defined in the map_____________驗",
      "update": "試_Disable Geometry Editing________驗",
      "updateTip": "試_Option to disable the ability to move the geometry once placed or move the geometry on an existing feature_________________________________驗",
      "allowUpdateOnly": "試_Update Only____驗",
      "allowUpdateOnlyTip": "試_Option to allow only the modication of existing features, checked on by default and disabled if the layer does not support creating new features____________________________________________驗",
      "fields": "試_Fields___驗",
      "fieldsTip": "試_Modify the fields to be edited and define Smart Attributes__________________驗",
      "description": "試_Description____驗",
      "descriptionTip": "試_Optionally enter text you want to display on top of the attribute page______________________驗."
    },
    "editFieldError": "試_Field modifications and Smart attributes are not available to layers that are not editable____________________________驗"
  },
  "editDescriptionPage": {
    "title": "試_Define attribute overview text for <b>${layername}</b>__________________驗 "
  },
  "fieldsPage": {
    "title": "試_Configure fields for <b>${layername}</b>_____________驗",
    "description": "試_Use the Preset column to allow the user to enter a value prior to creating a new feature. Use the Actions edit button to activate Smart Attributes on a layer. The Smart Attributes can require, hide or disable a field based on values in other fields____________________________________________________________________________驗.",
    "fieldsNotes": "試_* is a required field.  If you uncheck Display for this field, and the edit template does not populate that field value, you will not be able to save a new record__________________________________________________驗.",
    "fieldsSettingsTable": {
      "display": "試_Display___驗",
      "displayTip": "試_Determine whether the field is not visible______________驗",
      "edit": "試_Editable___驗",
      "editTip": "試_Check on if the field is present in the attribute form_________________驗",
      "fieldName": "試_Name__驗",
      "fieldNameTip": "試_Name of the field defined in the database_____________驗",
      "fieldAlias": "試_Alias___驗",
      "fieldAliasTip": "試_Name of the field defined in the map____________驗",
      "canPresetValue": "試_Preset___驗",
      "canPresetValueTip": "試_Option to show the field in the preset field list and allow the user to set the value prior to editing________________________________驗",
      "actions": "試_Actions___驗",
      "actionsTip": "試_Change the order of the fields or set up Smart Attributes__________________驗"
    },
    "smartAttSupport": "試_Smart Attributes are not supported on required database fields____________________驗"
  },
  "actionPage": {
    "title": "試_Configure the Smart Attribute actions for <b>${fieldname}</b>___________________驗",
    "description": "試_The actions are always off unless you specify the criteria on which they will be triggered.  The actions are processed in order and only one action will be triggered per field.  Use the Criteria Edit button to define the criteria______________________________________________________________________驗.",
    "actionsSettingsTable": {
      "rule": "試_Action___驗",
      "ruleTip": "試_Action performed when the criteria is satsified_______________驗",
      "expression": "試_Expression____驗",
      "expressionTip": "試_The resulting expression in SQL format from the defined criteria____________________驗",
      "actions": "試_Criteria___驗",
      "actionsTip": "試_Change the order of the rule and define the criteria when it is triggered_______________________驗"
    }
  },
  "filterPage": {
    "submitHidden": "試_Submit attribute data for this field even when hidden_________________驗?",
    "title": "試_Configure clause for the ${action} rule_____________驗",
    "filterBuilder": "試_Set action on field when record matches ${any_or_all} of the following expressions__________________________驗",
    "noFilterTip": "試_Using the tools below, define the statement for when the action is active_______________________驗."
  }
});