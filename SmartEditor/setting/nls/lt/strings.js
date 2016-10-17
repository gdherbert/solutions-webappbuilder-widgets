define({
  "layersPage": {
    "title": "Į_Select a template to create features____________š",
    "generalSettings": "Į_General Settings______š",
    "layerSettings": "Į_Layer Settings_____š",
    "editDescription": "Į_Provide display text for the edit panel_____________š",
    "editDescriptionTip": "Į_This text is displayed above the Template picker, leave blank for no text_______________________š.",
    "promptOnSave": "Į_Prompt to save unsaved edits when form is closed or switched to the next record_________________________š.",
    "promptOnSaveTip": "Į_Display a prompt when the user clicks close or navigates to the next editable record when the current feature has unsaved edits_______________________________________š.",
    "promptOnDelete": "Į_Require confirmation when deleting a record______________š.",
    "promptOnDeleteTip": "Į_Display a prompt when the user clicks delete to confirm the aciton_____________________š.",
    "removeOnSave": "Į_Remove feature from selection on save____________š.",
    "removeOnSaveTip": "Į_Option to remove the feature from the selection set when the record is saved.  If it is the only selected record, the panel is switched back to the template page__________________________________________________š.",
    "useFilterEditor": "Į_Use feature template filter_________š",
    "useFilterEditorTip": "Į_Option to use the Filter Template picker which provides the ability to view one layers templates or search for templates by name________________________________________š.",
    "layerSettingsTable": {
      "allowDelete": "Į_Allow Delete_____š",
      "allowDeleteTip": "Į_Option to allow the user to delete a feature; disabled if the layer does not support delete____________________________š",
      "edit": "Į_Editable___š",
      "editTip": "Į_Option to include the layer in the widget_____________š",
      "label": "Į_Layer___š",
      "labelTip": "Į_Name of the layer as defined in the map_____________š",
      "update": "Į_Disable Geometry Editing________š",
      "updateTip": "Į_Option to disable the ability to move the geometry once placed or move the geometry on an existing feature_________________________________š",
      "allowUpdateOnly": "Į_Update Only____š",
      "allowUpdateOnlyTip": "Į_Option to allow only the modication of existing features, checked on by default and disabled if the layer does not support creating new features____________________________________________š",
      "fields": "Į_Fields___š",
      "fieldsTip": "Į_Modify the fields to be edited and define Smart Attributes__________________š",
      "description": "Į_Description____š",
      "descriptionTip": "Į_Optionally enter text you want to display on top of the attribute page______________________š."
    },
    "editFieldError": "Į_Field modifications and Smart attributes are not available to layers that are not editable____________________________š"
  },
  "editDescriptionPage": {
    "title": "Į_Define attribute overview text for <b>${layername}</b>__________________š "
  },
  "fieldsPage": {
    "title": "Į_Configure fields for <b>${layername}</b>_____________š",
    "description": "Į_Use the Preset column to allow the user to enter a value prior to creating a new feature. Use the Actions edit button to activate Smart Attributes on a layer. The Smart Attributes can require, hide or disable a field based on values in other fields____________________________________________________________________________š.",
    "fieldsNotes": "Į_* is a required field.  If you uncheck Display for this field, and the edit template does not populate that field value, you will not be able to save a new record__________________________________________________š.",
    "fieldsSettingsTable": {
      "display": "Į_Display___š",
      "displayTip": "Į_Determine whether the field is not visible______________š",
      "edit": "Į_Editable___š",
      "editTip": "Į_Check on if the field is present in the attribute form_________________š",
      "fieldName": "Į_Name__š",
      "fieldNameTip": "Į_Name of the field defined in the database_____________š",
      "fieldAlias": "Į_Alias___š",
      "fieldAliasTip": "Į_Name of the field defined in the map____________š",
      "canPresetValue": "Į_Preset___š",
      "canPresetValueTip": "Į_Option to show the field in the preset field list and allow the user to set the value prior to editing________________________________š",
      "actions": "Į_Actions___š",
      "actionsTip": "Į_Change the order of the fields or set up Smart Attributes__________________š"
    },
    "smartAttSupport": "Į_Smart Attributes are not supported on required database fields____________________š"
  },
  "actionPage": {
    "title": "Į_Configure the Smart Attribute actions for <b>${fieldname}</b>___________________š",
    "description": "Į_The actions are always off unless you specify the criteria on which they will be triggered.  The actions are processed in order and only one action will be triggered per field.  Use the Criteria Edit button to define the criteria______________________________________________________________________š.",
    "actionsSettingsTable": {
      "rule": "Į_Action___š",
      "ruleTip": "Į_Action performed when the criteria is satsified_______________š",
      "expression": "Į_Expression____š",
      "expressionTip": "Į_The resulting expression in SQL format from the defined criteria____________________š",
      "actions": "Į_Criteria___š",
      "actionsTip": "Į_Change the order of the rule and define the criteria when it is triggered_______________________š"
    }
  },
  "filterPage": {
    "submitHidden": "Į_Submit attribute data for this field even when hidden_________________š?",
    "title": "Į_Configure clause for the ${action} rule_____________š",
    "filterBuilder": "Į_Set action on field when record matches ${any_or_all} of the following expressions__________________________š",
    "noFilterTip": "Į_Using the tools below, define the statement for when the action is active_______________________š."
  }
});