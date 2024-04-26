define("Contacts_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_Name",
							"caption": "#ResourceString(PDS_Name)#",
							"dataValueType": 1,
							"sticky": true,
							"width": 114
						},
						{
							"id": "438505b8-4a87-0ac6-d1c3-1382780806cb",
							"code": "PDS_Type",
							"path": "Type",
							"caption": "#ResourceString(PDS_Type)#",
							"dataValueType": 10,
							"referenceSchemaName": "ContactType",
							"width": 114
						},
						{
							"id": "5ed38ba6-ba72-02dc-9a20-16061858b43c",
							"code": "PDS_Account",
							"path": "Account",
							"caption": "#ResourceString(PDS_Account)#",
							"dataValueType": 10,
							"referenceSchemaName": "Account",
							"width": 114
						},
						{
							"id": "f571923f-a6bf-3a21-20cb-15ca194c8fc3",
							"code": "PDS_MobilePhone",
							"path": "MobilePhone",
							"caption": "#ResourceString(PDS_MobilePhone)#",
							"dataValueType": 28,
							"width": 114
						},
						{
							"id": "13caff8e-71be-0bba-e7a6-bcc271830274",
							"code": "PDS_Email",
							"path": "Email",
							"caption": "#ResourceString(PDS_Email)#",
							"dataValueType": 28,
							"width": 114
						},
						{
							"id": "6edec4e2-3d12-d22a-3cf8-a0b5c22f1d26",
							"code": "PDS_Country",
							"path": "Country",
							"caption": "#ResourceString(PDS_Country)#",
							"dataValueType": 10,
							"referenceSchemaName": "Country",
							"width": 114
						},
						{
							"id": "699e8e60-3785-bab5-7d36-efc511da80e4",
							"code": "PDS_BirthDate",
							"path": "BirthDate",
							"caption": "#ResourceString(PDS_BirthDate)#",
							"dataValueType": 8,
							"width": 114
						},
						{
							"id": "d15b82ce-9a99-420f-9581-a68fa4110862",
							"code": "PDS_Age",
							"path": "Age",
							"caption": "#ResourceString(PDS_Age)#",
							"dataValueType": 4
						},
						{
							"id": "bc16292a-8e89-ee42-478f-d82ab9678e3e",
							"code": "PDS_UsrVwContactAgeDaysUsrContactUsrAgeDaysMaxb3b6d8a5",
							"path": "[UsrVwContactAgeDays:UsrContact].UsrAgeDays",
							"caption": "#ResourceString(PDS_UsrVwContactAgeDaysUsrContactUsrAgeDaysMaxb3b6d8a5)#",
							"dataValueType": 4,
							"referenceSchemaName": "UsrVwContactAgeDays"
						}
					]
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_Age": {
						"modelConfig": {
							"path": "PDS.Age"
						}
					},
					"PDS_UsrVwContactAgeDaysUsrContactUsrAgeDaysMaxb3b6d8a5": {
						"modelConfig": {
							"path": "PDS.UsrVwContactAgeDaysUsrContactUsrAgeDaysMaxb3b6d8a5"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config",
					"attributes"
				],
				"values": {
					"Age": {
						"path": "Age"
					},
					"UsrVwContactAgeDaysUsrContactUsrAgeDaysMaxb3b6d8a5": {
						"type": "Aggregation",
						"path": "[UsrVwContactAgeDays:UsrContact].UsrAgeDays",
						"aggregationConfig": {
							"aggregationFunction": "Max",
							"filter": null
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});