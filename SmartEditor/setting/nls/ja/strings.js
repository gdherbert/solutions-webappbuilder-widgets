define({
  "layersPage": {
    "title": "須_Select a template to create features____________鷗",
    "generalSettings": "須_General Settings______鷗",
    "layerSettings": "須_Layer Settings_____鷗",
    "editDescription": "須_Provide display text for the edit panel_____________鷗",
    "editDescriptionTip": "須_This text is displayed above the Template picker, leave blank for no text_______________________鷗.",
    "promptOnSave": "須_Prompt to save unsaved edits when form is closed or switched to the next record_________________________鷗.",
    "promptOnSaveTip": "須_Display a prompt when the user clicks close or navigates to the next editable record when the current feature has unsaved edits_______________________________________鷗.",
    "promptOnDelete": "須_Require confirmation when deleting a record______________鷗.",
    "promptOnDeleteTip": "須_Display a prompt when the user clicks delete to confirm the aciton_____________________鷗.",
    "removeOnSave": "須_Remove feature from selection on save____________鷗.",
    "removeOnSaveTip": "須_Option to remove the feature from the selection set when the record is saved.  If it is the only selected record, the panel is switched back to the template page__________________________________________________鷗.",
    "useFilterEditor": "須_Use feature template filter_________鷗",
    "useFilterEditorTip": "須_Option to use the Filter Template picker which provides the ability to view one layers templates or search for templates by name________________________________________鷗.",
    "layerSettingsTable": {
      "allowDelete": "須_Allow Delete_____鷗",
      "allowDeleteTip": "須_Option to allow the user to delete a feature; disabled if the layer does not support delete____________________________鷗",
      "edit": "須_Editable___鷗",
      "editTip": "須_Option to include the layer in the widget_____________鷗",
      "label": "須_Layer___鷗",
      "labelTip": "須_Name of the layer as defined in the map_____________鷗",
      "update": "須_Disable Geometry Editing________鷗",
      "updateTip": "須_Option to disable the ability to move the geometry once placed or move the geometry on an existing feature_________________________________鷗",
      "allowUpdateOnly": "須_Update Only____鷗",
      "allowUpdateOnlyTip": "須_Option to allow only the modication of existing features, checked on by default and disabled if the layer does not support creating new features____________________________________________鷗",
      "fields": "須_Fields___鷗",
      "fieldsTip": "須_Modify the fields to be edited and define Smart Attributes__________________鷗",
      "description": "須_Description____鷗",
      "descriptionTip": "須_Optionally enter text you want to display on top of the attribute page______________________鷗."
    },
    "editFieldError": "須_Field modifications and Smart attributes are not available to layers that are not editable____________________________鷗"
  },
  "editDescriptionPage": {
    "title": "須_Define attribute overview text for <b>${layername}</b>__________________鷗 "
  },
  "fieldsPage": {
    "title": "須_Configure fields for <b>${layername}</b>_____________鷗",
    "description": "須_Use the Preset column to allow the user to enter a value prior to creating a new feature. Use the Actions edit button to activate Smart Attributes on a layer. The Smart Attributes can require, hide or disable a field based on values in other fields____________________________________________________________________________鷗.",
    "fieldsNotes": "須_* is a required field.  If you uncheck Display for this field, and the edit template does not populate that field value, you will not be able to save a new record__________________________________________________鷗.",
    "fieldsSettingsTable": {
      "display": "須_Display___鷗",
      "displayTip": "須_Determine whether the field is not visible______________鷗",
      "edit": "須_Editable___鷗",
      "editTip": "須_Check on if the field is present in the attribute form_________________鷗",
      "fieldName": "須_Name__鷗",
      "fieldNameTip": "須_Name of the field defined in the database_____________鷗",
      "fieldAlias": "須_Alias___鷗",
      "fieldAliasTip": "須_Name of the field defined in the map____________鷗",
      "canPresetValue": "須_Preset___鷗",
      "canPresetValueTip": "須_Option to show the field in the preset field list and allow the user to set the value prior to editing________________________________鷗",
      "actions": "須_Actions___鷗",
      "actionsTip": "須_Change the order of the fields or set up Smart Attributes__________________鷗"
    },
    "smartAttSupport": "須_Smart Attributes are not supported on required database fields____________________鷗"
  },
  "actionPage": {
    "title": "須_Configure the Smart Attribute actions for <b>${fieldname}</b>___________________鷗",
    "description": "須_The actions are always off unless you specify the criteria on which they will be triggered.  The actions are processed in order and only one action will be triggered per field.  Use the Criteria Edit button to define the criteria______________________________________________________________________鷗.",
    "actionsSettingsTable": {
      "rule": "須_Action___鷗",
      "ruleTip": "須_Action performed when the criteria is satsified_______________鷗",
      "expression": "須_Expression____鷗",
      "expressionTip": "須_The resulting expression in SQL format from the defined criteria____________________鷗",
      "actions": "須_Criteria___鷗",
      "actionsTip": "須_Change the order of the rule and define the criteria when it is triggered_______________________鷗"
    }
  },
  "filterPage": {
    "submitHidden": "須_Submit attribute data for this field even when hidden_________________鷗?",
    "title": "須_Configure clause for the ${action} rule_____________鷗",
    "filterBuilder": "須_Set action on field when record matches ${any_or_all} of the following expressions__________________________鷗",
    "noFilterTip": "須_Using the tools below, define the statement for when the action is active_______________________鷗."
  }
});