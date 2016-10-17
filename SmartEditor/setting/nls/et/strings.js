define({
  "layersPage": {
    "title": "Š_Select a template to create features____________ä",
    "generalSettings": "Š_General Settings______ä",
    "layerSettings": "Š_Layer Settings_____ä",
    "editDescription": "Š_Provide display text for the edit panel_____________ä",
    "editDescriptionTip": "Š_This text is displayed above the Template picker, leave blank for no text_______________________ä.",
    "promptOnSave": "Š_Prompt to save unsaved edits when form is closed or switched to the next record_________________________ä.",
    "promptOnSaveTip": "Š_Display a prompt when the user clicks close or navigates to the next editable record when the current feature has unsaved edits_______________________________________ä.",
    "promptOnDelete": "Š_Require confirmation when deleting a record______________ä.",
    "promptOnDeleteTip": "Š_Display a prompt when the user clicks delete to confirm the aciton_____________________ä.",
    "removeOnSave": "Š_Remove feature from selection on save____________ä.",
    "removeOnSaveTip": "Š_Option to remove the feature from the selection set when the record is saved.  If it is the only selected record, the panel is switched back to the template page__________________________________________________ä.",
    "useFilterEditor": "Š_Use feature template filter_________ä",
    "useFilterEditorTip": "Š_Option to use the Filter Template picker which provides the ability to view one layers templates or search for templates by name________________________________________ä.",
    "layerSettingsTable": {
      "allowDelete": "Š_Allow Delete_____ä",
      "allowDeleteTip": "Š_Option to allow the user to delete a feature; disabled if the layer does not support delete____________________________ä",
      "edit": "Š_Editable___ä",
      "editTip": "Š_Option to include the layer in the widget_____________ä",
      "label": "Š_Layer___ä",
      "labelTip": "Š_Name of the layer as defined in the map_____________ä",
      "update": "Š_Disable Geometry Editing________ä",
      "updateTip": "Š_Option to disable the ability to move the geometry once placed or move the geometry on an existing feature_________________________________ä",
      "allowUpdateOnly": "Š_Update Only____ä",
      "allowUpdateOnlyTip": "Š_Option to allow only the modication of existing features, checked on by default and disabled if the layer does not support creating new features____________________________________________ä",
      "fields": "Š_Fields___ä",
      "fieldsTip": "Š_Modify the fields to be edited and define Smart Attributes__________________ä",
      "description": "Š_Description____ä",
      "descriptionTip": "Š_Optionally enter text you want to display on top of the attribute page______________________ä."
    },
    "editFieldError": "Š_Field modifications and Smart attributes are not available to layers that are not editable____________________________ä"
  },
  "editDescriptionPage": {
    "title": "Š_Define attribute overview text for <b>${layername}</b>__________________ä "
  },
  "fieldsPage": {
    "title": "Š_Configure fields for <b>${layername}</b>_____________ä",
    "description": "Š_Use the Preset column to allow the user to enter a value prior to creating a new feature. Use the Actions edit button to activate Smart Attributes on a layer. The Smart Attributes can require, hide or disable a field based on values in other fields____________________________________________________________________________ä.",
    "fieldsNotes": "Š_* is a required field.  If you uncheck Display for this field, and the edit template does not populate that field value, you will not be able to save a new record__________________________________________________ä.",
    "fieldsSettingsTable": {
      "display": "Š_Display___ä",
      "displayTip": "Š_Determine whether the field is not visible______________ä",
      "edit": "Š_Editable___ä",
      "editTip": "Š_Check on if the field is present in the attribute form_________________ä",
      "fieldName": "Š_Name__ä",
      "fieldNameTip": "Š_Name of the field defined in the database_____________ä",
      "fieldAlias": "Š_Alias___ä",
      "fieldAliasTip": "Š_Name of the field defined in the map____________ä",
      "canPresetValue": "Š_Preset___ä",
      "canPresetValueTip": "Š_Option to show the field in the preset field list and allow the user to set the value prior to editing________________________________ä",
      "actions": "Š_Actions___ä",
      "actionsTip": "Š_Change the order of the fields or set up Smart Attributes__________________ä"
    },
    "smartAttSupport": "Š_Smart Attributes are not supported on required database fields____________________ä"
  },
  "actionPage": {
    "title": "Š_Configure the Smart Attribute actions for <b>${fieldname}</b>___________________ä",
    "description": "Š_The actions are always off unless you specify the criteria on which they will be triggered.  The actions are processed in order and only one action will be triggered per field.  Use the Criteria Edit button to define the criteria______________________________________________________________________ä.",
    "actionsSettingsTable": {
      "rule": "Š_Action___ä",
      "ruleTip": "Š_Action performed when the criteria is satsified_______________ä",
      "expression": "Š_Expression____ä",
      "expressionTip": "Š_The resulting expression in SQL format from the defined criteria____________________ä",
      "actions": "Š_Criteria___ä",
      "actionsTip": "Š_Change the order of the rule and define the criteria when it is triggered_______________________ä"
    }
  },
  "filterPage": {
    "submitHidden": "Š_Submit attribute data for this field even when hidden_________________ä?",
    "title": "Š_Configure clause for the ${action} rule_____________ä",
    "filterBuilder": "Š_Set action on field when record matches ${any_or_all} of the following expressions__________________________ä",
    "noFilterTip": "Š_Using the tools below, define the statement for when the action is active_______________________ä."
  }
});