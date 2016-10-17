define({
  "layersPage": {
    "title": "Ĳ_Select a template to create features____________ä",
    "generalSettings": "Ĳ_General Settings______ä",
    "layerSettings": "Ĳ_Layer Settings_____ä",
    "editDescription": "Ĳ_Provide display text for the edit panel_____________ä",
    "editDescriptionTip": "Ĳ_This text is displayed above the Template picker, leave blank for no text_______________________ä.",
    "promptOnSave": "Ĳ_Prompt to save unsaved edits when form is closed or switched to the next record_________________________ä.",
    "promptOnSaveTip": "Ĳ_Display a prompt when the user clicks close or navigates to the next editable record when the current feature has unsaved edits_______________________________________ä.",
    "promptOnDelete": "Ĳ_Require confirmation when deleting a record______________ä.",
    "promptOnDeleteTip": "Ĳ_Display a prompt when the user clicks delete to confirm the aciton_____________________ä.",
    "removeOnSave": "Ĳ_Remove feature from selection on save____________ä.",
    "removeOnSaveTip": "Ĳ_Option to remove the feature from the selection set when the record is saved.  If it is the only selected record, the panel is switched back to the template page__________________________________________________ä.",
    "useFilterEditor": "Ĳ_Use feature template filter_________ä",
    "useFilterEditorTip": "Ĳ_Option to use the Filter Template picker which provides the ability to view one layers templates or search for templates by name________________________________________ä.",
    "layerSettingsTable": {
      "allowDelete": "Ĳ_Allow Delete_____ä",
      "allowDeleteTip": "Ĳ_Option to allow the user to delete a feature; disabled if the layer does not support delete____________________________ä",
      "edit": "Ĳ_Editable___ä",
      "editTip": "Ĳ_Option to include the layer in the widget_____________ä",
      "label": "Ĳ_Layer___ä",
      "labelTip": "Ĳ_Name of the layer as defined in the map_____________ä",
      "update": "Ĳ_Disable Geometry Editing________ä",
      "updateTip": "Ĳ_Option to disable the ability to move the geometry once placed or move the geometry on an existing feature_________________________________ä",
      "allowUpdateOnly": "Ĳ_Update Only____ä",
      "allowUpdateOnlyTip": "Ĳ_Option to allow only the modication of existing features, checked on by default and disabled if the layer does not support creating new features____________________________________________ä",
      "fields": "Ĳ_Fields___ä",
      "fieldsTip": "Ĳ_Modify the fields to be edited and define Smart Attributes__________________ä",
      "description": "Ĳ_Description____ä",
      "descriptionTip": "Ĳ_Optionally enter text you want to display on top of the attribute page______________________ä."
    },
    "editFieldError": "Ĳ_Field modifications and Smart attributes are not available to layers that are not editable____________________________ä"
  },
  "editDescriptionPage": {
    "title": "Ĳ_Define attribute overview text for <b>${layername}</b>__________________ä "
  },
  "fieldsPage": {
    "title": "Ĳ_Configure fields for <b>${layername}</b>_____________ä",
    "description": "Ĳ_Use the Preset column to allow the user to enter a value prior to creating a new feature. Use the Actions edit button to activate Smart Attributes on a layer. The Smart Attributes can require, hide or disable a field based on values in other fields____________________________________________________________________________ä.",
    "fieldsNotes": "Ĳ_* is a required field.  If you uncheck Display for this field, and the edit template does not populate that field value, you will not be able to save a new record__________________________________________________ä.",
    "fieldsSettingsTable": {
      "display": "Ĳ_Display___ä",
      "displayTip": "Ĳ_Determine whether the field is not visible______________ä",
      "edit": "Ĳ_Editable___ä",
      "editTip": "Ĳ_Check on if the field is present in the attribute form_________________ä",
      "fieldName": "Ĳ_Name__ä",
      "fieldNameTip": "Ĳ_Name of the field defined in the database_____________ä",
      "fieldAlias": "Ĳ_Alias___ä",
      "fieldAliasTip": "Ĳ_Name of the field defined in the map____________ä",
      "canPresetValue": "Ĳ_Preset___ä",
      "canPresetValueTip": "Ĳ_Option to show the field in the preset field list and allow the user to set the value prior to editing________________________________ä",
      "actions": "Ĳ_Actions___ä",
      "actionsTip": "Ĳ_Change the order of the fields or set up Smart Attributes__________________ä"
    },
    "smartAttSupport": "Ĳ_Smart Attributes are not supported on required database fields____________________ä"
  },
  "actionPage": {
    "title": "Ĳ_Configure the Smart Attribute actions for <b>${fieldname}</b>___________________ä",
    "description": "Ĳ_The actions are always off unless you specify the criteria on which they will be triggered.  The actions are processed in order and only one action will be triggered per field.  Use the Criteria Edit button to define the criteria______________________________________________________________________ä.",
    "actionsSettingsTable": {
      "rule": "Ĳ_Action___ä",
      "ruleTip": "Ĳ_Action performed when the criteria is satsified_______________ä",
      "expression": "Ĳ_Expression____ä",
      "expressionTip": "Ĳ_The resulting expression in SQL format from the defined criteria____________________ä",
      "actions": "Ĳ_Criteria___ä",
      "actionsTip": "Ĳ_Change the order of the rule and define the criteria when it is triggered_______________________ä"
    }
  },
  "filterPage": {
    "submitHidden": "Ĳ_Submit attribute data for this field even when hidden_________________ä?",
    "title": "Ĳ_Configure clause for the ${action} rule_____________ä",
    "filterBuilder": "Ĳ_Set action on field when record matches ${any_or_all} of the following expressions__________________________ä",
    "noFilterTip": "Ĳ_Using the tools below, define the statement for when the action is active_______________________ä."
  }
});