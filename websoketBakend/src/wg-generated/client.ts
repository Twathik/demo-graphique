import type {
	ClientConfig,
	CreateClientConfig,
	User,
	UploadRequestOptions,
	OperationMetadata,
	OperationsDefinition,
	OperationRequestOptions,
	SubscriptionRequestOptions,
	SubscriptionEventHandler,
	FetchUserRequestOptions,
	UploadValidationOptions,
	QueryRequestOptions,
	MutationRequestOptions,
	ClientOperationErrors,
	ExtractProfileName,
	ExtractMeta,
	GraphQLError,
} from "@wundergraph/sdk/client";
import { Client } from "@wundergraph/sdk/client";
import type { OperationErrors } from "./ts-operation-errors";

import type { PublicCustomClaims } from "./claims";
import type {
	CountriesResponse,
	CountriesInput,
	CountriesResponseData,
	DataTableGetDataTableConfigurationsResponse,
	DataTableGetDataTableConfigurationsInput,
	DataTableGetDataTableConfigurationsResponseData,
	DataTableInsertDataSubscriptionResponse,
	DataTableInsertDataSubscriptionInput,
	DataTableInsertDataSubscriptionResponseData,
	DataTableTriggerInsertDataSubscriptionResponse,
	DataTableTriggerInsertDataSubscriptionInput,
	DataTableTriggerInsertDataSubscriptionResponseData,
	DocumentTemplatesGetDocumentTemplatesResponse,
	DocumentTemplatesGetDocumentTemplatesResponseData,
	DocumentTemplatesGetDocumentTemplatesSettingsResponse,
	DocumentTemplatesGetDocumentTemplatesSettingsResponseData,
	DocumentTemplatesSaveDocumentTemplateSettingsResponse,
	DocumentTemplatesSaveDocumentTemplateSettingsInput,
	DocumentTemplatesSaveDocumentTemplateSettingsResponseData,
	DrugsIndexDrugsResponse,
	DrugsIndexDrugsResponseData,
	EconomizersCreateEconomizerResponse,
	EconomizersCreateEconomizerInput,
	EconomizersCreateEconomizerResponseData,
	EconomizersDeleteEconomizerResponse,
	EconomizersDeleteEconomizerInput,
	EconomizersDeleteEconomizerResponseData,
	EconomizersEconomizerTemplateResponse,
	EconomizersEconomizerTemplateInput,
	EconomizersEconomizerTemplateResponseData,
	EconomizersEconomizersResponse,
	EconomizersEconomizersInput,
	EconomizersEconomizersResponseData,
	EconomizersUpdateEconomizerResponse,
	EconomizersUpdateEconomizerInput,
	EconomizersUpdateEconomizerResponseData,
	GapActFAmilyCreateOneActFamilyResponse,
	GapActFAmilyCreateOneActFamilyInput,
	GapActFAmilyCreateOneActFamilyResponseData,
	GapActFAmilyDeleteOneActFamilyResponse,
	GapActFAmilyDeleteOneActFamilyInput,
	GapActFAmilyDeleteOneActFamilyResponseData,
	GapActFAmilyUpdateOneActFamilyResponse,
	GapActFAmilyUpdateOneActFamilyInput,
	GapActFAmilyUpdateOneActFamilyResponseData,
	GapActsCreateOneActResponse,
	GapActsCreateOneActInput,
	GapActsCreateOneActResponseData,
	GapActsDeleteOneActResponse,
	GapActsDeleteOneActInput,
	GapActsDeleteOneActResponseData,
	GapActsGetActsResponse,
	GapActsGetActsInput,
	GapActsGetActsResponseData,
	GapActsUpdateOneActResponse,
	GapActsUpdateOneActInput,
	GapActsUpdateOneActResponseData,
	GapAdmissionsGetAdmissionsResponse,
	GapAdmissionsGetAdmissionsResponseData,
	GapAdmissionsNewAdmissionResponse,
	GapAdmissionsNewAdmissionInput,
	GapAdmissionsNewAdmissionResponseData,
	GapBarcodesExtractLotNumberResponse,
	GapBarcodesExtractLotNumberInput,
	GapBarcodesExtractLotNumberResponseData,
	GapBarcodesGenerateInternalIdResponse,
	GapBarcodesGenerateInternalIdInput,
	GapBarcodesGenerateInternalIdResponseData,
	GapBarcodesValidateGTINResponse,
	GapBarcodesValidateGTINInput,
	GapBarcodesValidateGTINResponseData,
	GapGapUserFormatOneGapUserResponse,
	GapGapUserFormatOneGapUserInput,
	GapGapUserFormatOneGapUserResponseData,
	GapHospitalizationBedCreateOneBedResponse,
	GapHospitalizationBedCreateOneBedInput,
	GapHospitalizationBedCreateOneBedResponseData,
	GapHospitalizationBedDeleteOneBedResponse,
	GapHospitalizationBedDeleteOneBedInput,
	GapHospitalizationBedDeleteOneBedResponseData,
	GapHospitalizationBedGetBedsResponse,
	GapHospitalizationBedGetBedsInput,
	GapHospitalizationBedGetBedsResponseData,
	GapHospitalizationBedGetBedsQueryResponse,
	GapHospitalizationBedGetBedsQueryInput,
	GapHospitalizationBedGetBedsQueryResponseData,
	GapHospitalizationBedUpdateOneBedResponse,
	GapHospitalizationBedUpdateOneBedInput,
	GapHospitalizationBedUpdateOneBedResponseData,
	GapHospitalizationRoomCreateOneRoomResponse,
	GapHospitalizationRoomCreateOneRoomInput,
	GapHospitalizationRoomCreateOneRoomResponseData,
	GapHospitalizationRoomDeleteOneRoomResponse,
	GapHospitalizationRoomDeleteOneRoomInput,
	GapHospitalizationRoomDeleteOneRoomResponseData,
	GapHospitalizationRoomGetRoomsResponse,
	GapHospitalizationRoomGetRoomsInput,
	GapHospitalizationRoomGetRoomsResponseData,
	GapHospitalizationRoomGetRoomsQueryResponse,
	GapHospitalizationRoomGetRoomsQueryInput,
	GapHospitalizationRoomGetRoomsQueryResponseData,
	GapHospitalizationRoomUpdateOneRoomResponse,
	GapHospitalizationRoomUpdateOneRoomInput,
	GapHospitalizationRoomUpdateOneRoomResponseData,
	GapHospitalizationUnitCreateOneUnitResponse,
	GapHospitalizationUnitCreateOneUnitInput,
	GapHospitalizationUnitCreateOneUnitResponseData,
	GapHospitalizationUnitDeleteOneUnitResponse,
	GapHospitalizationUnitDeleteOneUnitInput,
	GapHospitalizationUnitDeleteOneUnitResponseData,
	GapHospitalizationUnitUpdateOneUnitResponse,
	GapHospitalizationUnitUpdateOneUnitInput,
	GapHospitalizationUnitUpdateOneUnitResponseData,
	GapInHospitalComplicationsCreateOneInHospitalComplicationResponse,
	GapInHospitalComplicationsCreateOneInHospitalComplicationInput,
	GapInHospitalComplicationsCreateOneInHospitalComplicationResponseData,
	GapInHospitalComplicationsDeleteOneInHospitalComplicationResponse,
	GapInHospitalComplicationsDeleteOneInHospitalComplicationInput,
	GapInHospitalComplicationsDeleteOneInHospitalComplicationResponseData,
	GapInHospitalComplicationsUpdateOneInHospitalComplicationResponse,
	GapInHospitalComplicationsUpdateOneInHospitalComplicationInput,
	GapInHospitalComplicationsUpdateOneInHospitalComplicationResponseData,
	GapInHospitalDrugsCommercialsCreateOneInHospitalDrugsCommercialResponse,
	GapInHospitalDrugsCommercialsCreateOneInHospitalDrugsCommercialInput,
	GapInHospitalDrugsCommercialsCreateOneInHospitalDrugsCommercialResponseData,
	GapInHospitalDrugsCommercialsDeleteOneInHospitalDrugsCommercialResponse,
	GapInHospitalDrugsCommercialsDeleteOneInHospitalDrugsCommercialInput,
	GapInHospitalDrugsCommercialsDeleteOneInHospitalDrugsCommercialResponseData,
	GapInHospitalDrugsCommercialsRemoveInHospitalDrugsCommercialDCIRelationResponse,
	GapInHospitalDrugsCommercialsRemoveInHospitalDrugsCommercialDCIRelationInput,
	GapInHospitalDrugsCommercialsRemoveInHospitalDrugsCommercialDCIRelationResponseData,
	GapInHospitalDrugsCommercialsRemoveInHospitalDrugsCommercialLaboratoryRelationResponse,
	GapInHospitalDrugsCommercialsRemoveInHospitalDrugsCommercialLaboratoryRelationInput,
	GapInHospitalDrugsCommercialsRemoveInHospitalDrugsCommercialLaboratoryRelationResponseData,
	GapInHospitalDrugsCommercialsUpdateOneInHospitalDrugsCommercialResponse,
	GapInHospitalDrugsCommercialsUpdateOneInHospitalDrugsCommercialInput,
	GapInHospitalDrugsCommercialsUpdateOneInHospitalDrugsCommercialResponseData,
	GapInHospitalDrugsDCIsCreateOneInHospitalDrugsDCIResponse,
	GapInHospitalDrugsDCIsCreateOneInHospitalDrugsDCIInput,
	GapInHospitalDrugsDCIsCreateOneInHospitalDrugsDCIResponseData,
	GapInHospitalDrugsDCIsDeleteOneInHospitalDrugsDCIResponse,
	GapInHospitalDrugsDCIsDeleteOneInHospitalDrugsDCIInput,
	GapInHospitalDrugsDCIsDeleteOneInHospitalDrugsDCIResponseData,
	GapInHospitalDrugsDCIsUpdateOneInHospitalDrugsDCIResponse,
	GapInHospitalDrugsDCIsUpdateOneInHospitalDrugsDCIInput,
	GapInHospitalDrugsDCIsUpdateOneInHospitalDrugsDCIResponseData,
	GapInHospitalDrugsLaboratoriesCreateOneInHospitalDrugsLaboratoryResponse,
	GapInHospitalDrugsLaboratoriesCreateOneInHospitalDrugsLaboratoryInput,
	GapInHospitalDrugsLaboratoriesCreateOneInHospitalDrugsLaboratoryResponseData,
	GapInHospitalDrugsLaboratoriesDeleteOneInHospitalDrugsLaboratoryResponse,
	GapInHospitalDrugsLaboratoriesDeleteOneInHospitalDrugsLaboratoryInput,
	GapInHospitalDrugsLaboratoriesDeleteOneInHospitalDrugsLaboratoryResponseData,
	GapInHospitalDrugsLaboratoriesUpdateOneInHospitalDrugsLaboratoryResponse,
	GapInHospitalDrugsLaboratoriesUpdateOneInHospitalDrugsLaboratoryInput,
	GapInHospitalDrugsLaboratoriesUpdateOneInHospitalDrugsLaboratoryResponseData,
	GapInHospitalMedicalSupplierCreateOneInHospitalMedicalSupplierResponse,
	GapInHospitalMedicalSupplierCreateOneInHospitalMedicalSupplierInput,
	GapInHospitalMedicalSupplierCreateOneInHospitalMedicalSupplierResponseData,
	GapInHospitalMedicalSupplierDeleteOneInHospitalMedicalSupplierResponse,
	GapInHospitalMedicalSupplierDeleteOneInHospitalMedicalSupplierInput,
	GapInHospitalMedicalSupplierDeleteOneInHospitalMedicalSupplierResponseData,
	GapInHospitalMedicalSupplierUpdateOneInHospitalMedicalSupplierResponse,
	GapInHospitalMedicalSupplierUpdateOneInHospitalMedicalSupplierInput,
	GapInHospitalMedicalSupplierUpdateOneInHospitalMedicalSupplierResponseData,
	GapInHospitalNonSpecificSuppliesCreateOneInHospitalNonSpecificSupplyResponse,
	GapInHospitalNonSpecificSuppliesCreateOneInHospitalNonSpecificSupplyInput,
	GapInHospitalNonSpecificSuppliesCreateOneInHospitalNonSpecificSupplyResponseData,
	GapInHospitalNonSpecificSuppliesDeleteOneInHospitalNonSpecificSupplyResponse,
	GapInHospitalNonSpecificSuppliesDeleteOneInHospitalNonSpecificSupplyInput,
	GapInHospitalNonSpecificSuppliesDeleteOneInHospitalNonSpecificSupplyResponseData,
	GapInHospitalNonSpecificSuppliesRemoveInHospitalNonSpecificSupplySupplierRelationResponse,
	GapInHospitalNonSpecificSuppliesRemoveInHospitalNonSpecificSupplySupplierRelationInput,
	GapInHospitalNonSpecificSuppliesRemoveInHospitalNonSpecificSupplySupplierRelationResponseData,
	GapInHospitalNonSpecificSuppliesUpdateOneInHospitalNonSpecificSupplyResponse,
	GapInHospitalNonSpecificSuppliesUpdateOneInHospitalNonSpecificSupplyInput,
	GapInHospitalNonSpecificSuppliesUpdateOneInHospitalNonSpecificSupplyResponseData,
	GapInHospitalSpecificMaterialTypesCreateOneInHospitalSpecificMaterialTypeResponse,
	GapInHospitalSpecificMaterialTypesCreateOneInHospitalSpecificMaterialTypeInput,
	GapInHospitalSpecificMaterialTypesCreateOneInHospitalSpecificMaterialTypeResponseData,
	GapInHospitalSpecificMaterialTypesDeleteOneInHospitalSpecificMaterialTypeResponse,
	GapInHospitalSpecificMaterialTypesDeleteOneInHospitalSpecificMaterialTypeInput,
	GapInHospitalSpecificMaterialTypesDeleteOneInHospitalSpecificMaterialTypeResponseData,
	GapInHospitalSpecificMaterialTypesUpdateOneInHospitalSpecificMaterialTypeResponse,
	GapInHospitalSpecificMaterialTypesUpdateOneInHospitalSpecificMaterialTypeInput,
	GapInHospitalSpecificMaterialTypesUpdateOneInHospitalSpecificMaterialTypeResponseData,
	GapInHospitalSpecificMaterialsCreateOneInHospitalSpecificMaterialResponse,
	GapInHospitalSpecificMaterialsCreateOneInHospitalSpecificMaterialInput,
	GapInHospitalSpecificMaterialsCreateOneInHospitalSpecificMaterialResponseData,
	GapInHospitalSpecificMaterialsDeleteOneInHospitalSpecificMaterialResponse,
	GapInHospitalSpecificMaterialsDeleteOneInHospitalSpecificMaterialInput,
	GapInHospitalSpecificMaterialsDeleteOneInHospitalSpecificMaterialResponseData,
	GapInHospitalSpecificMaterialsRemoveInHospitalSpecificMaterialMedicalSupplierRelationResponse,
	GapInHospitalSpecificMaterialsRemoveInHospitalSpecificMaterialMedicalSupplierRelationInput,
	GapInHospitalSpecificMaterialsRemoveInHospitalSpecificMaterialMedicalSupplierRelationResponseData,
	GapInHospitalSpecificMaterialsRemoveInHospitalSpecificMaterialSpecificMaterialTypeRelationResponse,
	GapInHospitalSpecificMaterialsRemoveInHospitalSpecificMaterialSpecificMaterialTypeRelationInput,
	GapInHospitalSpecificMaterialsRemoveInHospitalSpecificMaterialSpecificMaterialTypeRelationResponseData,
	GapInHospitalSpecificMaterialsUpdateOneInHospitalSpecificMaterialResponse,
	GapInHospitalSpecificMaterialsUpdateOneInHospitalSpecificMaterialInput,
	GapInHospitalSpecificMaterialsUpdateOneInHospitalSpecificMaterialResponseData,
	GapPharmaciesCreateOnePharmacyResponse,
	GapPharmaciesCreateOnePharmacyInput,
	GapPharmaciesCreateOnePharmacyResponseData,
	GapPharmaciesDeleteOnePharmacyResponse,
	GapPharmaciesDeleteOnePharmacyInput,
	GapPharmaciesDeleteOnePharmacyResponseData,
	GapPharmaciesRemovePharmacyUserRelationResponse,
	GapPharmaciesRemovePharmacyUserRelationInput,
	GapPharmaciesRemovePharmacyUserRelationResponseData,
	GapPharmaciesUpdateOnePharmacyResponse,
	GapPharmaciesUpdateOnePharmacyInput,
	GapPharmaciesUpdateOnePharmacyResponseData,
	GapSubActFamiliesCreateOneSubActFamilyResponse,
	GapSubActFamiliesCreateOneSubActFamilyInput,
	GapSubActFamiliesCreateOneSubActFamilyResponseData,
	GapSubActFamiliesDeleteOneSubActFamilyResponse,
	GapSubActFamiliesDeleteOneSubActFamilyInput,
	GapSubActFamiliesDeleteOneSubActFamilyResponseData,
	GapSubActFamiliesGetActSubFamiliesResponse,
	GapSubActFamiliesGetActSubFamiliesInput,
	GapSubActFamiliesGetActSubFamiliesResponseData,
	GapSubActFamiliesUpdateOneSubActFamilyResponse,
	GapSubActFamiliesUpdateOneSubActFamilyInput,
	GapSubActFamiliesUpdateOneSubActFamilyResponseData,
	GapSuppliesDeliveryLotsCreateOneSuppliesDeliveryLotResponse,
	GapSuppliesDeliveryLotsCreateOneSuppliesDeliveryLotInput,
	GapSuppliesDeliveryLotsCreateOneSuppliesDeliveryLotResponseData,
	GapSuppliesDeliveryLotsDeleteOneSuppliesDeliveryLotResponse,
	GapSuppliesDeliveryLotsDeleteOneSuppliesDeliveryLotInput,
	GapSuppliesDeliveryLotsDeleteOneSuppliesDeliveryLotResponseData,
	GapSuppliesDeliveryLotsRemoveLotsNotesRelationResponse,
	GapSuppliesDeliveryLotsRemoveLotsNotesRelationInput,
	GapSuppliesDeliveryLotsRemoveLotsNotesRelationResponseData,
	GapSuppliesDeliveryLotsUpdateOneSuppliesDeliveryLotResponse,
	GapSuppliesDeliveryLotsUpdateOneSuppliesDeliveryLotInput,
	GapSuppliesDeliveryLotsUpdateOneSuppliesDeliveryLotResponseData,
	GapSuppliesDeliveryNotesCreateOneSuppliesDeliveryNoteResponse,
	GapSuppliesDeliveryNotesCreateOneSuppliesDeliveryNoteInput,
	GapSuppliesDeliveryNotesCreateOneSuppliesDeliveryNoteResponseData,
	GapSuppliesDeliveryNotesDeleteOneSuppliesDeliveryNoteResponse,
	GapSuppliesDeliveryNotesDeleteOneSuppliesDeliveryNoteInput,
	GapSuppliesDeliveryNotesDeleteOneSuppliesDeliveryNoteResponseData,
	GapSuppliesDeliveryNotesUpdateOneSuppliesDeliveryNoteResponse,
	GapSuppliesDeliveryNotesUpdateOneSuppliesDeliveryNoteInput,
	GapSuppliesDeliveryNotesUpdateOneSuppliesDeliveryNoteResponseData,
	ModalityGetOneModalityResponse,
	ModalityGetOneModalityInput,
	ModalityGetOneModalityResponseData,
	ModalityGetSpecificModalitiesResponse,
	ModalityGetSpecificModalitiesInput,
	ModalityGetSpecificModalitiesResponseData,
	ModalityModalitiesResponse,
	ModalityModalitiesResponseData,
	ModalitySwitchModalityResponse,
	ModalitySwitchModalityInput,
	ModalitySwitchModalityResponseData,
	ModalityUpdateOneModalityResponse,
	ModalityUpdateOneModalityInput,
	ModalityUpdateOneModalityResponseData,
	PatientScannedDocumentsDeletePatientScannedDocumentsResponse,
	PatientScannedDocumentsDeletePatientScannedDocumentsInput,
	PatientScannedDocumentsDeletePatientScannedDocumentsResponseData,
	PatientScannedDocumentsGetPatientScannedDocumentsResponse,
	PatientScannedDocumentsGetPatientScannedDocumentsInput,
	PatientScannedDocumentsGetPatientScannedDocumentsResponseData,
	WorkingListsCreateOneWorkingListResponse,
	WorkingListsCreateOneWorkingListInput,
	WorkingListsCreateOneWorkingListResponseData,
	WorkingListsDeleteOneWorkingListResponse,
	WorkingListsDeleteOneWorkingListInput,
	WorkingListsDeleteOneWorkingListResponseData,
	WorkingListsLinkWorkingListResponse,
	WorkingListsLinkWorkingListInput,
	WorkingListsLinkWorkingListResponseData,
	WorkingListsPatientWorkingListsResponse,
	WorkingListsPatientWorkingListsInput,
	WorkingListsPatientWorkingListsResponseData,
	WorkingListsToggleLockWorkingListResponse,
	WorkingListsToggleLockWorkingListInput,
	WorkingListsToggleLockWorkingListResponseData,
	WorkingListsWorkingListsResponse,
	WorkingListsWorkingListsInput,
	WorkingListsWorkingListsResponseData,
	ClinicalDiagnosticsIndexClinicalDiagnosticResponse,
	ClinicalDiagnosticsIndexClinicalDiagnosticResponseData,
	ClinicalEventsCreateOneClinicalEventResponse,
	ClinicalEventsCreateOneClinicalEventInput,
	ClinicalEventsCreateOneClinicalEventResponseData,
	ClinicalEventsDeleteOneClinicalEventResponse,
	ClinicalEventsDeleteOneClinicalEventInput,
	ClinicalEventsDeleteOneClinicalEventResponseData,
	ClinicalEventsGetClinicalEventResponse,
	ClinicalEventsGetClinicalEventInput,
	ClinicalEventsGetClinicalEventResponseData,
	ClinicalEventsGetClinicalEventWithConfigurationResponse,
	ClinicalEventsGetClinicalEventWithConfigurationInput,
	ClinicalEventsGetClinicalEventWithConfigurationResponseData,
	ClinicalEventsGetClinicalEventsResponse,
	ClinicalEventsGetClinicalEventsInput,
	ClinicalEventsGetClinicalEventsResponseData,
	ConsultationListCheckIfRegistredResponse,
	ConsultationListCheckIfRegistredInput,
	ConsultationListCheckIfRegistredResponseData,
	ConsultationListCloseConsultationResponse,
	ConsultationListCloseConsultationInput,
	ConsultationListCloseConsultationResponseData,
	ConsultationListRegisterPatientResponse,
	ConsultationListRegisterPatientInput,
	ConsultationListRegisterPatientResponseData,
	ConsultationListTodayConsultationResponse,
	ConsultationListTodayConsultationInput,
	ConsultationListTodayConsultationResponseData,
	ConsultationListToggleActivePatientResponse,
	ConsultationListToggleActivePatientInput,
	ConsultationListToggleActivePatientResponseData,
	ConsultationListUnregisterPatientResponse,
	ConsultationListUnregisterPatientInput,
	ConsultationListUnregisterPatientResponseData,
	MobileDevicesMobileDevicesQueryResponse,
	MobileDevicesMobileDevicesQueryResponseData,
	MobileDevicesAddMobileDeviceMutationResponse,
	MobileDevicesAddMobileDeviceMutationInput,
	MobileDevicesAddMobileDeviceMutationResponseData,
	MobileDevicesRegisterOneMobileDeviceResponse,
	MobileDevicesRegisterOneMobileDeviceInput,
	MobileDevicesRegisterOneMobileDeviceResponseData,
	MobileDevicesRemoveMobileDeviceResponse,
	MobileDevicesRemoveMobileDeviceInput,
	MobileDevicesRemoveMobileDeviceResponseData,
	MobileDevicesResetMobileDeviceResponse,
	MobileDevicesResetMobileDeviceInput,
	MobileDevicesResetMobileDeviceResponseData,
	MobileDevicesSwitchMobileDeviceResponse,
	MobileDevicesSwitchMobileDeviceInput,
	MobileDevicesSwitchMobileDeviceResponseData,
	MobileDevicesUpdateMobileDeviceExpirationResponse,
	MobileDevicesUpdateMobileDeviceExpirationInput,
	MobileDevicesUpdateMobileDeviceExpirationResponseData,
	PatientsMovePatientFolderToTrashResponse,
	PatientsMovePatientFolderToTrashInput,
	PatientsMovePatientFolderToTrashResponseData,
	PatientsAdd_One_patient_to_indexResponse,
	PatientsAdd_One_patient_to_indexInput,
	PatientsAdd_One_patient_to_indexResponseData,
	PatientsGetDocumentHeadersResponse,
	PatientsGetDocumentHeadersInput,
	PatientsGetDocumentHeadersResponseData,
	PatientsGetOnTrashPatientsResponse,
	PatientsGetOnTrashPatientsResponseData,
	PatientsGetOnePatientResponse,
	PatientsGetOnePatientInput,
	PatientsGetOnePatientResponseData,
	PatientsGetOnePatientDocumentResponse,
	PatientsGetOnePatientDocumentInput,
	PatientsGetOnePatientDocumentResponseData,
	PatientsGetOnePatientInfoResponse,
	PatientsGetOnePatientInfoInput,
	PatientsGetOnePatientInfoResponseData,
	PatientsIndex_patientsResponse,
	PatientsIndex_patientsResponseData,
	PatientsMobileUpdateOnePatientResponse,
	PatientsMobileUpdateOnePatientInput,
	PatientsMobileUpdateOnePatientResponseData,
	PatientsToggleSelectedTrashPatientResponse,
	PatientsToggleSelectedTrashPatientInput,
	PatientsToggleSelectedTrashPatientResponseData,
	PatientsUpdateOnePatientResponse,
	PatientsUpdateOnePatientInput,
	PatientsUpdateOnePatientResponseData,
	UsersGetUserResponse,
	UsersGetUserResponseData,
	UsersGetUserDocumentViewSettingsResponse,
	UsersGetUserDocumentViewSettingsResponseData,
	UsersUpdateDocumentViewSettingsResponse,
	UsersUpdateDocumentViewSettingsInput,
	UsersUpdateDocumentViewSettingsResponseData,
	WorkingListsLinkExamResponse,
	WorkingListsLinkExamInput,
	WorkingListsLinkExamResponseData,
	WorkingListsRefreshLinkExamResponse,
	WorkingListsRefreshLinkExamInput,
	WorkingListsRefreshLinkExamResponseData,
	UsersGetResponse,
	UsersGetResponseData,
	UsersSubscribeResponse,
	UsersSubscribeInput,
	UsersSubscribeResponseData,
	UsersUpdateResponse,
	UsersUpdateInput,
	UsersUpdateResponseData,
} from "./models";
export type UserRole = "admin" | "user";

export const WUNDERGRAPH_S3_ENABLED = true;
export const WUNDERGRAPH_AUTH_ENABLED = true;

export interface UploadResponse {
	key: string;
}

export interface LocalMinioAvatarMetadata {
	uuid: string;
}

export interface LocalMinioGalleryMetadata {
	postId: string;
	position: number;
}

export interface LocalMinioDocumentTemplateMetadata {
	uuid: string;
	face: string;
}

type S3Providers = {
	localMinio: {
		hasProfiles: true;
		profiles: {
			avatar: LocalMinioAvatarMetadata;
			coverPicture: object;
			gallery: LocalMinioGalleryMetadata;
			documentTemplate: LocalMinioDocumentTemplateMetadata;
		};
	};
};

const S3UploadProviderData: { [provider: string]: { [profile: string]: UploadValidationOptions } } = {
	localMinio: {
		avatar: {
			requireAuthentication: true,
			maxAllowedUploadSizeBytes: 10485760,
			maxAllowedFiles: 1,
			allowedMimeTypes: ["image/png", "image/jpeg"],
			allowedFileExtensions: ["png", "jpg"],
		},
		coverPicture: {
			requireAuthentication: true,
			maxAllowedUploadSizeBytes: 10485760,
			maxAllowedFiles: 1,
			allowedMimeTypes: ["image/*"],
			allowedFileExtensions: ["png", "jpg"],
		},
		gallery: {
			requireAuthentication: true,
			maxAllowedUploadSizeBytes: -1,
			maxAllowedFiles: -1,
		},
		documentTemplate: {
			requireAuthentication: true,
			maxAllowedUploadSizeBytes: 20971520,
			maxAllowedFiles: 1,
			allowedMimeTypes: ["image/png", "image/jpeg"],
			allowedFileExtensions: ["png", "jpg"],
		},
	},
};

export enum AuthProviderId {
	"kc" = "kc",
}

export interface AuthProvider {
	id: AuthProviderId;
	login: (redirectURI?: string) => void;
}

export const defaultClientConfig: ClientConfig = {
	applicationHash: "d0b79176",
	baseURL: "http://api.bolt3.local",
	sdkVersion: "0.181.5",
};

export const operationMetadata: OperationMetadata = {
	Countries: {
		requiresAuthentication: true,
	},
	"DataTable/getDataTableConfigurations": {
		requiresAuthentication: true,
	},
	"DataTable/insertDataSubscription": {
		requiresAuthentication: true,
	},
	"DataTable/triggerInsertDataSubscription": {
		requiresAuthentication: true,
	},
	"DocumentTemplates/getDocumentTemplates": {
		requiresAuthentication: true,
	},
	"DocumentTemplates/getDocumentTemplatesSettings": {
		requiresAuthentication: true,
	},
	"DocumentTemplates/saveDocumentTemplateSettings": {
		requiresAuthentication: true,
	},
	"Drugs/indexDrugs": {
		requiresAuthentication: true,
	},
	"Economizers/createEconomizer": {
		requiresAuthentication: true,
	},
	"Economizers/deleteEconomizer": {
		requiresAuthentication: true,
	},
	"Economizers/economizerTemplate": {
		requiresAuthentication: true,
	},
	"Economizers/economizers": {
		requiresAuthentication: true,
	},
	"Economizers/updateEconomizer": {
		requiresAuthentication: true,
	},
	"Gap/ActFAmily/CreateOneActFamily": {
		requiresAuthentication: true,
	},
	"Gap/ActFAmily/DeleteOneActFamily": {
		requiresAuthentication: true,
	},
	"Gap/ActFAmily/UpdateOneActFamily": {
		requiresAuthentication: true,
	},
	"Gap/Acts/CreateOneAct": {
		requiresAuthentication: true,
	},
	"Gap/Acts/DeleteOneAct": {
		requiresAuthentication: true,
	},
	"Gap/Acts/GetActs": {
		requiresAuthentication: true,
	},
	"Gap/Acts/UpdateOneAct": {
		requiresAuthentication: true,
	},
	"Gap/Admissions/getAdmissions": {
		requiresAuthentication: true,
	},
	"Gap/Admissions/newAdmission": {
		requiresAuthentication: true,
	},
	"Gap/Barcodes/extractLotNumber": {
		requiresAuthentication: true,
	},
	"Gap/Barcodes/generateInternalId": {
		requiresAuthentication: true,
	},
	"Gap/Barcodes/validateGTIN": {
		requiresAuthentication: true,
	},
	"Gap/GapUser/FormatOneGapUser": {
		requiresAuthentication: true,
	},
	"Gap/HospitalizationBed/CreateOneBed": {
		requiresAuthentication: true,
	},
	"Gap/HospitalizationBed/DeleteOneBed": {
		requiresAuthentication: true,
	},
	"Gap/HospitalizationBed/GetBeds": {
		requiresAuthentication: true,
	},
	"Gap/HospitalizationBed/GetBedsQuery": {
		requiresAuthentication: true,
	},
	"Gap/HospitalizationBed/UpdateOneBed": {
		requiresAuthentication: true,
	},
	"Gap/HospitalizationRoom/CreateOneRoom": {
		requiresAuthentication: true,
	},
	"Gap/HospitalizationRoom/DeleteOneRoom": {
		requiresAuthentication: true,
	},
	"Gap/HospitalizationRoom/GetRooms": {
		requiresAuthentication: true,
	},
	"Gap/HospitalizationRoom/GetRoomsQuery": {
		requiresAuthentication: true,
	},
	"Gap/HospitalizationRoom/UpdateOneRoom": {
		requiresAuthentication: true,
	},
	"Gap/HospitalizationUnit/CreateOneUnit": {
		requiresAuthentication: true,
	},
	"Gap/HospitalizationUnit/DeleteOneUnit": {
		requiresAuthentication: true,
	},
	"Gap/HospitalizationUnit/UpdateOneUnit": {
		requiresAuthentication: true,
	},
	"Gap/InHospitalComplications/CreateOneInHospitalComplication": {
		requiresAuthentication: true,
	},
	"Gap/InHospitalComplications/DeleteOneInHospitalComplication": {
		requiresAuthentication: true,
	},
	"Gap/InHospitalComplications/UpdateOneInHospitalComplication": {
		requiresAuthentication: true,
	},
	"Gap/InHospitalDrugsCommercials/CreateOneInHospitalDrugsCommercial": {
		requiresAuthentication: true,
	},
	"Gap/InHospitalDrugsCommercials/DeleteOneInHospitalDrugsCommercial": {
		requiresAuthentication: true,
	},
	"Gap/InHospitalDrugsCommercials/RemoveInHospitalDrugsCommercialDCIRelation": {
		requiresAuthentication: true,
	},
	"Gap/InHospitalDrugsCommercials/RemoveInHospitalDrugsCommercialLaboratoryRelation": {
		requiresAuthentication: true,
	},
	"Gap/InHospitalDrugsCommercials/UpdateOneInHospitalDrugsCommercial": {
		requiresAuthentication: true,
	},
	"Gap/InHospitalDrugsDCIs/CreateOneInHospitalDrugsDCI": {
		requiresAuthentication: true,
	},
	"Gap/InHospitalDrugsDCIs/DeleteOneInHospitalDrugsDCI": {
		requiresAuthentication: true,
	},
	"Gap/InHospitalDrugsDCIs/UpdateOneInHospitalDrugsDCI": {
		requiresAuthentication: true,
	},
	"Gap/InHospitalDrugsLaboratories/CreateOneInHospitalDrugsLaboratory": {
		requiresAuthentication: true,
	},
	"Gap/InHospitalDrugsLaboratories/DeleteOneInHospitalDrugsLaboratory": {
		requiresAuthentication: true,
	},
	"Gap/InHospitalDrugsLaboratories/UpdateOneInHospitalDrugsLaboratory": {
		requiresAuthentication: true,
	},
	"Gap/InHospitalMedicalSupplier/CreateOneInHospitalMedicalSupplier": {
		requiresAuthentication: true,
	},
	"Gap/InHospitalMedicalSupplier/DeleteOneInHospitalMedicalSupplier": {
		requiresAuthentication: true,
	},
	"Gap/InHospitalMedicalSupplier/UpdateOneInHospitalMedicalSupplier": {
		requiresAuthentication: true,
	},
	"Gap/InHospitalNonSpecificSupplies/CreateOneInHospitalNonSpecificSupply": {
		requiresAuthentication: true,
	},
	"Gap/InHospitalNonSpecificSupplies/DeleteOneInHospitalNonSpecificSupply": {
		requiresAuthentication: true,
	},
	"Gap/InHospitalNonSpecificSupplies/RemoveInHospitalNonSpecificSupplySupplierRelation": {
		requiresAuthentication: true,
	},
	"Gap/InHospitalNonSpecificSupplies/UpdateOneInHospitalNonSpecificSupply": {
		requiresAuthentication: true,
	},
	"Gap/InHospitalSpecificMaterialTypes/CreateOneInHospitalSpecificMaterialType": {
		requiresAuthentication: true,
	},
	"Gap/InHospitalSpecificMaterialTypes/DeleteOneInHospitalSpecificMaterialType": {
		requiresAuthentication: true,
	},
	"Gap/InHospitalSpecificMaterialTypes/UpdateOneInHospitalSpecificMaterialType": {
		requiresAuthentication: true,
	},
	"Gap/InHospitalSpecificMaterials/CreateOneInHospitalSpecificMaterial": {
		requiresAuthentication: true,
	},
	"Gap/InHospitalSpecificMaterials/DeleteOneInHospitalSpecificMaterial": {
		requiresAuthentication: true,
	},
	"Gap/InHospitalSpecificMaterials/RemoveInHospitalSpecificMaterialMedicalSupplierRelation": {
		requiresAuthentication: true,
	},
	"Gap/InHospitalSpecificMaterials/RemoveInHospitalSpecificMaterialSpecificMaterialTypeRelation": {
		requiresAuthentication: true,
	},
	"Gap/InHospitalSpecificMaterials/UpdateOneInHospitalSpecificMaterial": {
		requiresAuthentication: true,
	},
	"Gap/Pharmacies/CreateOnePharmacy": {
		requiresAuthentication: true,
	},
	"Gap/Pharmacies/DeleteOnePharmacy": {
		requiresAuthentication: true,
	},
	"Gap/Pharmacies/RemovePharmacyUserRelation": {
		requiresAuthentication: true,
	},
	"Gap/Pharmacies/UpdateOnePharmacy": {
		requiresAuthentication: true,
	},
	"Gap/SubActFamilies/CreateOneSubActFamily": {
		requiresAuthentication: true,
	},
	"Gap/SubActFamilies/DeleteOneSubActFamily": {
		requiresAuthentication: true,
	},
	"Gap/SubActFamilies/GetActSubFamilies": {
		requiresAuthentication: true,
	},
	"Gap/SubActFamilies/UpdateOneSubActFamily": {
		requiresAuthentication: true,
	},
	"Gap/SuppliesDeliveryLots/CreateOneSuppliesDeliveryLot": {
		requiresAuthentication: true,
	},
	"Gap/SuppliesDeliveryLots/DeleteOneSuppliesDeliveryLot": {
		requiresAuthentication: true,
	},
	"Gap/SuppliesDeliveryLots/RemoveLotsNotesRelation": {
		requiresAuthentication: true,
	},
	"Gap/SuppliesDeliveryLots/UpdateOneSuppliesDeliveryLot": {
		requiresAuthentication: true,
	},
	"Gap/SuppliesDeliveryNotes/CreateOneSuppliesDeliveryNote": {
		requiresAuthentication: true,
	},
	"Gap/SuppliesDeliveryNotes/DeleteOneSuppliesDeliveryNote": {
		requiresAuthentication: true,
	},
	"Gap/SuppliesDeliveryNotes/UpdateOneSuppliesDeliveryNote": {
		requiresAuthentication: true,
	},
	"Modality/getOneModality": {
		requiresAuthentication: true,
	},
	"Modality/getSpecificModalities": {
		requiresAuthentication: true,
	},
	"Modality/modalities": {
		requiresAuthentication: true,
	},
	"Modality/switchModality": {
		requiresAuthentication: true,
	},
	"Modality/updateOneModality": {
		requiresAuthentication: true,
	},
	"PatientScannedDocuments/deletePatientScannedDocuments": {
		requiresAuthentication: true,
	},
	"PatientScannedDocuments/getPatientScannedDocuments": {
		requiresAuthentication: true,
	},
	"WorkingLists/createOneWorkingList": {
		requiresAuthentication: true,
	},
	"WorkingLists/deleteOneWorkingList": {
		requiresAuthentication: true,
	},
	"WorkingLists/linkWorkingList": {
		requiresAuthentication: true,
	},
	"WorkingLists/patientWorkingLists": {
		requiresAuthentication: true,
	},
	"WorkingLists/toggleLockWorkingList": {
		requiresAuthentication: true,
	},
	"WorkingLists/workingLists": {
		requiresAuthentication: true,
	},
	"clinicalDiagnostics/indexClinicalDiagnostic": {
		requiresAuthentication: true,
	},
	"clinicalEvents/createOneClinicalEvent": {
		requiresAuthentication: true,
	},
	"clinicalEvents/deleteOneClinicalEvent": {
		requiresAuthentication: true,
	},
	"clinicalEvents/getClinicalEvent": {
		requiresAuthentication: true,
	},
	"clinicalEvents/getClinicalEventWithConfiguration": {
		requiresAuthentication: true,
	},
	"clinicalEvents/getClinicalEvents": {
		requiresAuthentication: true,
	},
	"consultationList/checkIfRegistred": {
		requiresAuthentication: true,
	},
	"consultationList/closeConsultation": {
		requiresAuthentication: true,
	},
	"consultationList/registerPatient": {
		requiresAuthentication: true,
	},
	"consultationList/todayConsultation": {
		requiresAuthentication: true,
	},
	"consultationList/toggleActivePatient": {
		requiresAuthentication: true,
	},
	"consultationList/unregisterPatient": {
		requiresAuthentication: true,
	},
	"mobileDevices/MobileDevicesQuery": {
		requiresAuthentication: true,
	},
	"mobileDevices/addMobileDeviceMutation": {
		requiresAuthentication: true,
	},
	"mobileDevices/registerOneMobileDevice": {
		requiresAuthentication: true,
	},
	"mobileDevices/removeMobileDevice": {
		requiresAuthentication: true,
	},
	"mobileDevices/resetMobileDevice": {
		requiresAuthentication: true,
	},
	"mobileDevices/switchMobileDevice": {
		requiresAuthentication: true,
	},
	"mobileDevices/updateMobileDeviceExpiration": {
		requiresAuthentication: true,
	},
	"patients/MovePatientFolderToTrash": {
		requiresAuthentication: true,
	},
	"patients/add_One_patient_to_index": {
		requiresAuthentication: true,
	},
	"patients/getDocumentHeaders": {
		requiresAuthentication: true,
	},
	"patients/getOnTrashPatients": {
		requiresAuthentication: true,
	},
	"patients/getOnePatient": {
		requiresAuthentication: true,
	},
	"patients/getOnePatientDocument": {
		requiresAuthentication: true,
	},
	"patients/getOnePatientInfo": {
		requiresAuthentication: true,
	},
	"patients/index_patients": {
		requiresAuthentication: true,
	},
	"patients/mobileUpdateOnePatient": {
		requiresAuthentication: true,
	},
	"patients/toggleSelectedTrashPatient": {
		requiresAuthentication: true,
	},
	"patients/updateOnePatient": {
		requiresAuthentication: true,
	},
	"users/getUser": {
		requiresAuthentication: true,
	},
	"users/getUserDocumentViewSettings": {
		requiresAuthentication: true,
	},
	"users/updateDocumentViewSettings": {
		requiresAuthentication: true,
	},
	"WorkingLists/linkExam": {
		requiresAuthentication: true,
	},
	"WorkingLists/refreshLinkExam": {
		requiresAuthentication: true,
	},
	"users/get": {
		requiresAuthentication: true,
	},
	"users/subscribe": {
		requiresAuthentication: true,
	},
	"users/update": {
		requiresAuthentication: true,
	},
};

export type PublicUser = User<UserRole, PublicCustomClaims>;

export class WunderGraphClient extends Client {
	query<
		OperationName extends Extract<keyof Operations["queries"], string>,
		Input extends Operations["queries"][OperationName]["input"] = Operations["queries"][OperationName]["input"],
		Response extends Operations["queries"][OperationName]["response"] = Operations["queries"][OperationName]["response"]
	>(options: OperationName extends string ? QueryRequestOptions<OperationName, Input> : OperationRequestOptions) {
		return super.query<OperationRequestOptions, Response["data"], Response["error"]>(options);
	}

	mutate<
		OperationName extends Extract<keyof Operations["mutations"], string>,
		Input extends Operations["mutations"][OperationName]["input"] = Operations["mutations"][OperationName]["input"],
		Response extends Operations["mutations"][OperationName]["response"] = Operations["mutations"][OperationName]["response"]
	>(options: OperationName extends string ? MutationRequestOptions<OperationName, Input> : OperationRequestOptions) {
		return super.mutate<OperationRequestOptions, Response["data"], Response["error"]>(options);
	}

	subscribe<
		OperationName extends Extract<keyof Operations["subscriptions"], string>,
		Input extends Operations["subscriptions"][OperationName]["input"] = Operations["subscriptions"][OperationName]["input"],
		Response extends Operations["subscriptions"][OperationName]["response"] = Operations["subscriptions"][OperationName]["response"]
	>(
		options: OperationName extends string
			? SubscriptionRequestOptions<OperationName, Input>
			: SubscriptionRequestOptions,
		cb?: SubscriptionEventHandler<Response["data"], Response["error"]>
	) {
		return super.subscribe<OperationRequestOptions, Response["data"], Response["error"]>(options, cb);
	}
	public async uploadFiles<
		ProviderName extends Extract<keyof S3Providers, string>,
		ProfileName extends ExtractProfileName<S3Providers[ProviderName]["profiles"]> = ExtractProfileName<
			S3Providers[ProviderName]["profiles"]
		>,
		Meta extends ExtractMeta<S3Providers[ProviderName]["profiles"], ProfileName> = ExtractMeta<
			S3Providers[ProviderName]["profiles"],
			ProfileName
		>
	>(config: UploadRequestOptions<ProviderName, ProfileName, Meta>) {
		const profile = config.profile ? S3UploadProviderData[config.provider][config.profile as string] : undefined;
		return super.uploadFiles(config, profile);
	}
	public login(authProviderID: Operations["authProvider"], redirectURI?: string) {
		return super.login(authProviderID, redirectURI);
	}
	public async fetchUser<TUser extends PublicUser = PublicUser>(options?: FetchUserRequestOptions) {
		return super.fetchUser<TUser>(options);
	}
}

export const createClient = (config?: CreateClientConfig) => {
	return new WunderGraphClient({
		...defaultClientConfig,
		...config,
		operationMetadata,
		csrfEnabled: true,
	});
};

export type Queries = {
	Countries: {
		input: CountriesInput;
		response: { data?: CountriesResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"DataTable/getDataTableConfigurations": {
		input: DataTableGetDataTableConfigurationsInput;
		response: { data?: DataTableGetDataTableConfigurationsResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"DocumentTemplates/getDocumentTemplates": {
		input?: undefined;
		response: { data?: DocumentTemplatesGetDocumentTemplatesResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"DocumentTemplates/getDocumentTemplatesSettings": {
		input?: undefined;
		response: { data?: DocumentTemplatesGetDocumentTemplatesSettingsResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Economizers/economizerTemplate": {
		input: EconomizersEconomizerTemplateInput;
		response: { data?: EconomizersEconomizerTemplateResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Economizers/economizers": {
		input: EconomizersEconomizersInput;
		response: { data?: EconomizersEconomizersResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Gap/Acts/GetActs": {
		input: GapActsGetActsInput;
		response: { data?: GapActsGetActsResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Gap/Admissions/getAdmissions": {
		input?: undefined;
		response: { data?: GapAdmissionsGetAdmissionsResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Gap/HospitalizationBed/GetBedsQuery": {
		input: GapHospitalizationBedGetBedsQueryInput;
		response: { data?: GapHospitalizationBedGetBedsQueryResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Gap/HospitalizationRoom/GetRoomsQuery": {
		input: GapHospitalizationRoomGetRoomsQueryInput;
		response: { data?: GapHospitalizationRoomGetRoomsQueryResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Gap/SubActFamilies/GetActSubFamilies": {
		input: GapSubActFamiliesGetActSubFamiliesInput;
		response: { data?: GapSubActFamiliesGetActSubFamiliesResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Modality/getOneModality": {
		input: ModalityGetOneModalityInput;
		response: { data?: ModalityGetOneModalityResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Modality/getSpecificModalities": {
		input: ModalityGetSpecificModalitiesInput;
		response: { data?: ModalityGetSpecificModalitiesResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Modality/modalities": {
		input?: undefined;
		response: { data?: ModalityModalitiesResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"PatientScannedDocuments/getPatientScannedDocuments": {
		input: PatientScannedDocumentsGetPatientScannedDocumentsInput;
		response: {
			data?: PatientScannedDocumentsGetPatientScannedDocumentsResponse["data"];
			error?: ClientOperationErrors;
		};
		requiresAuthentication: true;
	};
	"WorkingLists/patientWorkingLists": {
		input: WorkingListsPatientWorkingListsInput;
		response: { data?: WorkingListsPatientWorkingListsResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"WorkingLists/workingLists": {
		input: WorkingListsWorkingListsInput;
		response: { data?: WorkingListsWorkingListsResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"clinicalEvents/getClinicalEvent": {
		input: ClinicalEventsGetClinicalEventInput;
		response: { data?: ClinicalEventsGetClinicalEventResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"clinicalEvents/getClinicalEventWithConfiguration": {
		input: ClinicalEventsGetClinicalEventWithConfigurationInput;
		response: { data?: ClinicalEventsGetClinicalEventWithConfigurationResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"clinicalEvents/getClinicalEvents": {
		input: ClinicalEventsGetClinicalEventsInput;
		response: { data?: ClinicalEventsGetClinicalEventsResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"consultationList/checkIfRegistred": {
		input: ConsultationListCheckIfRegistredInput;
		response: { data?: ConsultationListCheckIfRegistredResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"consultationList/todayConsultation": {
		input: ConsultationListTodayConsultationInput;
		response: { data?: ConsultationListTodayConsultationResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"mobileDevices/MobileDevicesQuery": {
		input?: undefined;
		response: { data?: MobileDevicesMobileDevicesQueryResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"patients/getDocumentHeaders": {
		input: PatientsGetDocumentHeadersInput;
		response: { data?: PatientsGetDocumentHeadersResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"patients/getOnTrashPatients": {
		input?: undefined;
		response: { data?: PatientsGetOnTrashPatientsResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"patients/getOnePatient": {
		input: PatientsGetOnePatientInput;
		response: { data?: PatientsGetOnePatientResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"patients/getOnePatientDocument": {
		input: PatientsGetOnePatientDocumentInput;
		response: { data?: PatientsGetOnePatientDocumentResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"patients/getOnePatientInfo": {
		input: PatientsGetOnePatientInfoInput;
		response: { data?: PatientsGetOnePatientInfoResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"users/getUser": {
		input?: undefined;
		response: { data?: UsersGetUserResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"users/getUserDocumentViewSettings": {
		input?: undefined;
		response: { data?: UsersGetUserDocumentViewSettingsResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"WorkingLists/linkExam": {
		input: WorkingListsLinkExamInput;
		response: { data?: WorkingListsLinkExamResponseData; error?: OperationErrors["WorkingLists/linkExam"] };
		requiresAuthentication: true;
		liveQuery: boolean;
	};
	"users/get": {
		input?: undefined;
		response: { data?: UsersGetResponseData; error?: OperationErrors["users/get"] };
		requiresAuthentication: true;
		liveQuery: boolean;
	};
};

export type Mutations = {
	"DataTable/triggerInsertDataSubscription": {
		input: DataTableTriggerInsertDataSubscriptionInput;
		response: { data?: DataTableTriggerInsertDataSubscriptionResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"DocumentTemplates/saveDocumentTemplateSettings": {
		input: DocumentTemplatesSaveDocumentTemplateSettingsInput;
		response: { data?: DocumentTemplatesSaveDocumentTemplateSettingsResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Drugs/indexDrugs": {
		input?: undefined;
		response: { data?: DrugsIndexDrugsResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Economizers/createEconomizer": {
		input: EconomizersCreateEconomizerInput;
		response: { data?: EconomizersCreateEconomizerResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Economizers/deleteEconomizer": {
		input: EconomizersDeleteEconomizerInput;
		response: { data?: EconomizersDeleteEconomizerResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Economizers/updateEconomizer": {
		input: EconomizersUpdateEconomizerInput;
		response: { data?: EconomizersUpdateEconomizerResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Gap/ActFAmily/CreateOneActFamily": {
		input: GapActFAmilyCreateOneActFamilyInput;
		response: { data?: GapActFAmilyCreateOneActFamilyResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Gap/ActFAmily/DeleteOneActFamily": {
		input: GapActFAmilyDeleteOneActFamilyInput;
		response: { data?: GapActFAmilyDeleteOneActFamilyResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Gap/ActFAmily/UpdateOneActFamily": {
		input: GapActFAmilyUpdateOneActFamilyInput;
		response: { data?: GapActFAmilyUpdateOneActFamilyResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Gap/Acts/CreateOneAct": {
		input: GapActsCreateOneActInput;
		response: { data?: GapActsCreateOneActResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Gap/Acts/DeleteOneAct": {
		input: GapActsDeleteOneActInput;
		response: { data?: GapActsDeleteOneActResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Gap/Acts/UpdateOneAct": {
		input: GapActsUpdateOneActInput;
		response: { data?: GapActsUpdateOneActResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Gap/Admissions/newAdmission": {
		input: GapAdmissionsNewAdmissionInput;
		response: { data?: GapAdmissionsNewAdmissionResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Gap/Barcodes/extractLotNumber": {
		input: GapBarcodesExtractLotNumberInput;
		response: { data?: GapBarcodesExtractLotNumberResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Gap/Barcodes/generateInternalId": {
		input: GapBarcodesGenerateInternalIdInput;
		response: { data?: GapBarcodesGenerateInternalIdResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Gap/Barcodes/validateGTIN": {
		input: GapBarcodesValidateGTINInput;
		response: { data?: GapBarcodesValidateGTINResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Gap/GapUser/FormatOneGapUser": {
		input: GapGapUserFormatOneGapUserInput;
		response: { data?: GapGapUserFormatOneGapUserResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Gap/HospitalizationBed/CreateOneBed": {
		input: GapHospitalizationBedCreateOneBedInput;
		response: { data?: GapHospitalizationBedCreateOneBedResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Gap/HospitalizationBed/DeleteOneBed": {
		input: GapHospitalizationBedDeleteOneBedInput;
		response: { data?: GapHospitalizationBedDeleteOneBedResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Gap/HospitalizationBed/GetBeds": {
		input: GapHospitalizationBedGetBedsInput;
		response: { data?: GapHospitalizationBedGetBedsResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Gap/HospitalizationBed/UpdateOneBed": {
		input: GapHospitalizationBedUpdateOneBedInput;
		response: { data?: GapHospitalizationBedUpdateOneBedResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Gap/HospitalizationRoom/CreateOneRoom": {
		input: GapHospitalizationRoomCreateOneRoomInput;
		response: { data?: GapHospitalizationRoomCreateOneRoomResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Gap/HospitalizationRoom/DeleteOneRoom": {
		input: GapHospitalizationRoomDeleteOneRoomInput;
		response: { data?: GapHospitalizationRoomDeleteOneRoomResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Gap/HospitalizationRoom/GetRooms": {
		input: GapHospitalizationRoomGetRoomsInput;
		response: { data?: GapHospitalizationRoomGetRoomsResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Gap/HospitalizationRoom/UpdateOneRoom": {
		input: GapHospitalizationRoomUpdateOneRoomInput;
		response: { data?: GapHospitalizationRoomUpdateOneRoomResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Gap/HospitalizationUnit/CreateOneUnit": {
		input: GapHospitalizationUnitCreateOneUnitInput;
		response: { data?: GapHospitalizationUnitCreateOneUnitResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Gap/HospitalizationUnit/DeleteOneUnit": {
		input: GapHospitalizationUnitDeleteOneUnitInput;
		response: { data?: GapHospitalizationUnitDeleteOneUnitResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Gap/HospitalizationUnit/UpdateOneUnit": {
		input: GapHospitalizationUnitUpdateOneUnitInput;
		response: { data?: GapHospitalizationUnitUpdateOneUnitResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Gap/InHospitalComplications/CreateOneInHospitalComplication": {
		input: GapInHospitalComplicationsCreateOneInHospitalComplicationInput;
		response: {
			data?: GapInHospitalComplicationsCreateOneInHospitalComplicationResponse["data"];
			error?: ClientOperationErrors;
		};
		requiresAuthentication: true;
	};
	"Gap/InHospitalComplications/DeleteOneInHospitalComplication": {
		input: GapInHospitalComplicationsDeleteOneInHospitalComplicationInput;
		response: {
			data?: GapInHospitalComplicationsDeleteOneInHospitalComplicationResponse["data"];
			error?: ClientOperationErrors;
		};
		requiresAuthentication: true;
	};
	"Gap/InHospitalComplications/UpdateOneInHospitalComplication": {
		input: GapInHospitalComplicationsUpdateOneInHospitalComplicationInput;
		response: {
			data?: GapInHospitalComplicationsUpdateOneInHospitalComplicationResponse["data"];
			error?: ClientOperationErrors;
		};
		requiresAuthentication: true;
	};
	"Gap/InHospitalDrugsCommercials/CreateOneInHospitalDrugsCommercial": {
		input: GapInHospitalDrugsCommercialsCreateOneInHospitalDrugsCommercialInput;
		response: {
			data?: GapInHospitalDrugsCommercialsCreateOneInHospitalDrugsCommercialResponse["data"];
			error?: ClientOperationErrors;
		};
		requiresAuthentication: true;
	};
	"Gap/InHospitalDrugsCommercials/DeleteOneInHospitalDrugsCommercial": {
		input: GapInHospitalDrugsCommercialsDeleteOneInHospitalDrugsCommercialInput;
		response: {
			data?: GapInHospitalDrugsCommercialsDeleteOneInHospitalDrugsCommercialResponse["data"];
			error?: ClientOperationErrors;
		};
		requiresAuthentication: true;
	};
	"Gap/InHospitalDrugsCommercials/RemoveInHospitalDrugsCommercialDCIRelation": {
		input: GapInHospitalDrugsCommercialsRemoveInHospitalDrugsCommercialDCIRelationInput;
		response: {
			data?: GapInHospitalDrugsCommercialsRemoveInHospitalDrugsCommercialDCIRelationResponse["data"];
			error?: ClientOperationErrors;
		};
		requiresAuthentication: true;
	};
	"Gap/InHospitalDrugsCommercials/RemoveInHospitalDrugsCommercialLaboratoryRelation": {
		input: GapInHospitalDrugsCommercialsRemoveInHospitalDrugsCommercialLaboratoryRelationInput;
		response: {
			data?: GapInHospitalDrugsCommercialsRemoveInHospitalDrugsCommercialLaboratoryRelationResponse["data"];
			error?: ClientOperationErrors;
		};
		requiresAuthentication: true;
	};
	"Gap/InHospitalDrugsCommercials/UpdateOneInHospitalDrugsCommercial": {
		input: GapInHospitalDrugsCommercialsUpdateOneInHospitalDrugsCommercialInput;
		response: {
			data?: GapInHospitalDrugsCommercialsUpdateOneInHospitalDrugsCommercialResponse["data"];
			error?: ClientOperationErrors;
		};
		requiresAuthentication: true;
	};
	"Gap/InHospitalDrugsDCIs/CreateOneInHospitalDrugsDCI": {
		input: GapInHospitalDrugsDCIsCreateOneInHospitalDrugsDCIInput;
		response: {
			data?: GapInHospitalDrugsDCIsCreateOneInHospitalDrugsDCIResponse["data"];
			error?: ClientOperationErrors;
		};
		requiresAuthentication: true;
	};
	"Gap/InHospitalDrugsDCIs/DeleteOneInHospitalDrugsDCI": {
		input: GapInHospitalDrugsDCIsDeleteOneInHospitalDrugsDCIInput;
		response: {
			data?: GapInHospitalDrugsDCIsDeleteOneInHospitalDrugsDCIResponse["data"];
			error?: ClientOperationErrors;
		};
		requiresAuthentication: true;
	};
	"Gap/InHospitalDrugsDCIs/UpdateOneInHospitalDrugsDCI": {
		input: GapInHospitalDrugsDCIsUpdateOneInHospitalDrugsDCIInput;
		response: {
			data?: GapInHospitalDrugsDCIsUpdateOneInHospitalDrugsDCIResponse["data"];
			error?: ClientOperationErrors;
		};
		requiresAuthentication: true;
	};
	"Gap/InHospitalDrugsLaboratories/CreateOneInHospitalDrugsLaboratory": {
		input: GapInHospitalDrugsLaboratoriesCreateOneInHospitalDrugsLaboratoryInput;
		response: {
			data?: GapInHospitalDrugsLaboratoriesCreateOneInHospitalDrugsLaboratoryResponse["data"];
			error?: ClientOperationErrors;
		};
		requiresAuthentication: true;
	};
	"Gap/InHospitalDrugsLaboratories/DeleteOneInHospitalDrugsLaboratory": {
		input: GapInHospitalDrugsLaboratoriesDeleteOneInHospitalDrugsLaboratoryInput;
		response: {
			data?: GapInHospitalDrugsLaboratoriesDeleteOneInHospitalDrugsLaboratoryResponse["data"];
			error?: ClientOperationErrors;
		};
		requiresAuthentication: true;
	};
	"Gap/InHospitalDrugsLaboratories/UpdateOneInHospitalDrugsLaboratory": {
		input: GapInHospitalDrugsLaboratoriesUpdateOneInHospitalDrugsLaboratoryInput;
		response: {
			data?: GapInHospitalDrugsLaboratoriesUpdateOneInHospitalDrugsLaboratoryResponse["data"];
			error?: ClientOperationErrors;
		};
		requiresAuthentication: true;
	};
	"Gap/InHospitalMedicalSupplier/CreateOneInHospitalMedicalSupplier": {
		input: GapInHospitalMedicalSupplierCreateOneInHospitalMedicalSupplierInput;
		response: {
			data?: GapInHospitalMedicalSupplierCreateOneInHospitalMedicalSupplierResponse["data"];
			error?: ClientOperationErrors;
		};
		requiresAuthentication: true;
	};
	"Gap/InHospitalMedicalSupplier/DeleteOneInHospitalMedicalSupplier": {
		input: GapInHospitalMedicalSupplierDeleteOneInHospitalMedicalSupplierInput;
		response: {
			data?: GapInHospitalMedicalSupplierDeleteOneInHospitalMedicalSupplierResponse["data"];
			error?: ClientOperationErrors;
		};
		requiresAuthentication: true;
	};
	"Gap/InHospitalMedicalSupplier/UpdateOneInHospitalMedicalSupplier": {
		input: GapInHospitalMedicalSupplierUpdateOneInHospitalMedicalSupplierInput;
		response: {
			data?: GapInHospitalMedicalSupplierUpdateOneInHospitalMedicalSupplierResponse["data"];
			error?: ClientOperationErrors;
		};
		requiresAuthentication: true;
	};
	"Gap/InHospitalNonSpecificSupplies/CreateOneInHospitalNonSpecificSupply": {
		input: GapInHospitalNonSpecificSuppliesCreateOneInHospitalNonSpecificSupplyInput;
		response: {
			data?: GapInHospitalNonSpecificSuppliesCreateOneInHospitalNonSpecificSupplyResponse["data"];
			error?: ClientOperationErrors;
		};
		requiresAuthentication: true;
	};
	"Gap/InHospitalNonSpecificSupplies/DeleteOneInHospitalNonSpecificSupply": {
		input: GapInHospitalNonSpecificSuppliesDeleteOneInHospitalNonSpecificSupplyInput;
		response: {
			data?: GapInHospitalNonSpecificSuppliesDeleteOneInHospitalNonSpecificSupplyResponse["data"];
			error?: ClientOperationErrors;
		};
		requiresAuthentication: true;
	};
	"Gap/InHospitalNonSpecificSupplies/RemoveInHospitalNonSpecificSupplySupplierRelation": {
		input: GapInHospitalNonSpecificSuppliesRemoveInHospitalNonSpecificSupplySupplierRelationInput;
		response: {
			data?: GapInHospitalNonSpecificSuppliesRemoveInHospitalNonSpecificSupplySupplierRelationResponse["data"];
			error?: ClientOperationErrors;
		};
		requiresAuthentication: true;
	};
	"Gap/InHospitalNonSpecificSupplies/UpdateOneInHospitalNonSpecificSupply": {
		input: GapInHospitalNonSpecificSuppliesUpdateOneInHospitalNonSpecificSupplyInput;
		response: {
			data?: GapInHospitalNonSpecificSuppliesUpdateOneInHospitalNonSpecificSupplyResponse["data"];
			error?: ClientOperationErrors;
		};
		requiresAuthentication: true;
	};
	"Gap/InHospitalSpecificMaterialTypes/CreateOneInHospitalSpecificMaterialType": {
		input: GapInHospitalSpecificMaterialTypesCreateOneInHospitalSpecificMaterialTypeInput;
		response: {
			data?: GapInHospitalSpecificMaterialTypesCreateOneInHospitalSpecificMaterialTypeResponse["data"];
			error?: ClientOperationErrors;
		};
		requiresAuthentication: true;
	};
	"Gap/InHospitalSpecificMaterialTypes/DeleteOneInHospitalSpecificMaterialType": {
		input: GapInHospitalSpecificMaterialTypesDeleteOneInHospitalSpecificMaterialTypeInput;
		response: {
			data?: GapInHospitalSpecificMaterialTypesDeleteOneInHospitalSpecificMaterialTypeResponse["data"];
			error?: ClientOperationErrors;
		};
		requiresAuthentication: true;
	};
	"Gap/InHospitalSpecificMaterialTypes/UpdateOneInHospitalSpecificMaterialType": {
		input: GapInHospitalSpecificMaterialTypesUpdateOneInHospitalSpecificMaterialTypeInput;
		response: {
			data?: GapInHospitalSpecificMaterialTypesUpdateOneInHospitalSpecificMaterialTypeResponse["data"];
			error?: ClientOperationErrors;
		};
		requiresAuthentication: true;
	};
	"Gap/InHospitalSpecificMaterials/CreateOneInHospitalSpecificMaterial": {
		input: GapInHospitalSpecificMaterialsCreateOneInHospitalSpecificMaterialInput;
		response: {
			data?: GapInHospitalSpecificMaterialsCreateOneInHospitalSpecificMaterialResponse["data"];
			error?: ClientOperationErrors;
		};
		requiresAuthentication: true;
	};
	"Gap/InHospitalSpecificMaterials/DeleteOneInHospitalSpecificMaterial": {
		input: GapInHospitalSpecificMaterialsDeleteOneInHospitalSpecificMaterialInput;
		response: {
			data?: GapInHospitalSpecificMaterialsDeleteOneInHospitalSpecificMaterialResponse["data"];
			error?: ClientOperationErrors;
		};
		requiresAuthentication: true;
	};
	"Gap/InHospitalSpecificMaterials/RemoveInHospitalSpecificMaterialMedicalSupplierRelation": {
		input: GapInHospitalSpecificMaterialsRemoveInHospitalSpecificMaterialMedicalSupplierRelationInput;
		response: {
			data?: GapInHospitalSpecificMaterialsRemoveInHospitalSpecificMaterialMedicalSupplierRelationResponse["data"];
			error?: ClientOperationErrors;
		};
		requiresAuthentication: true;
	};
	"Gap/InHospitalSpecificMaterials/RemoveInHospitalSpecificMaterialSpecificMaterialTypeRelation": {
		input: GapInHospitalSpecificMaterialsRemoveInHospitalSpecificMaterialSpecificMaterialTypeRelationInput;
		response: {
			data?: GapInHospitalSpecificMaterialsRemoveInHospitalSpecificMaterialSpecificMaterialTypeRelationResponse["data"];
			error?: ClientOperationErrors;
		};
		requiresAuthentication: true;
	};
	"Gap/InHospitalSpecificMaterials/UpdateOneInHospitalSpecificMaterial": {
		input: GapInHospitalSpecificMaterialsUpdateOneInHospitalSpecificMaterialInput;
		response: {
			data?: GapInHospitalSpecificMaterialsUpdateOneInHospitalSpecificMaterialResponse["data"];
			error?: ClientOperationErrors;
		};
		requiresAuthentication: true;
	};
	"Gap/Pharmacies/CreateOnePharmacy": {
		input: GapPharmaciesCreateOnePharmacyInput;
		response: { data?: GapPharmaciesCreateOnePharmacyResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Gap/Pharmacies/DeleteOnePharmacy": {
		input: GapPharmaciesDeleteOnePharmacyInput;
		response: { data?: GapPharmaciesDeleteOnePharmacyResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Gap/Pharmacies/RemovePharmacyUserRelation": {
		input: GapPharmaciesRemovePharmacyUserRelationInput;
		response: { data?: GapPharmaciesRemovePharmacyUserRelationResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Gap/Pharmacies/UpdateOnePharmacy": {
		input: GapPharmaciesUpdateOnePharmacyInput;
		response: { data?: GapPharmaciesUpdateOnePharmacyResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Gap/SubActFamilies/CreateOneSubActFamily": {
		input: GapSubActFamiliesCreateOneSubActFamilyInput;
		response: { data?: GapSubActFamiliesCreateOneSubActFamilyResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Gap/SubActFamilies/DeleteOneSubActFamily": {
		input: GapSubActFamiliesDeleteOneSubActFamilyInput;
		response: { data?: GapSubActFamiliesDeleteOneSubActFamilyResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Gap/SubActFamilies/UpdateOneSubActFamily": {
		input: GapSubActFamiliesUpdateOneSubActFamilyInput;
		response: { data?: GapSubActFamiliesUpdateOneSubActFamilyResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Gap/SuppliesDeliveryLots/CreateOneSuppliesDeliveryLot": {
		input: GapSuppliesDeliveryLotsCreateOneSuppliesDeliveryLotInput;
		response: {
			data?: GapSuppliesDeliveryLotsCreateOneSuppliesDeliveryLotResponse["data"];
			error?: ClientOperationErrors;
		};
		requiresAuthentication: true;
	};
	"Gap/SuppliesDeliveryLots/DeleteOneSuppliesDeliveryLot": {
		input: GapSuppliesDeliveryLotsDeleteOneSuppliesDeliveryLotInput;
		response: {
			data?: GapSuppliesDeliveryLotsDeleteOneSuppliesDeliveryLotResponse["data"];
			error?: ClientOperationErrors;
		};
		requiresAuthentication: true;
	};
	"Gap/SuppliesDeliveryLots/RemoveLotsNotesRelation": {
		input: GapSuppliesDeliveryLotsRemoveLotsNotesRelationInput;
		response: { data?: GapSuppliesDeliveryLotsRemoveLotsNotesRelationResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Gap/SuppliesDeliveryLots/UpdateOneSuppliesDeliveryLot": {
		input: GapSuppliesDeliveryLotsUpdateOneSuppliesDeliveryLotInput;
		response: {
			data?: GapSuppliesDeliveryLotsUpdateOneSuppliesDeliveryLotResponse["data"];
			error?: ClientOperationErrors;
		};
		requiresAuthentication: true;
	};
	"Gap/SuppliesDeliveryNotes/CreateOneSuppliesDeliveryNote": {
		input: GapSuppliesDeliveryNotesCreateOneSuppliesDeliveryNoteInput;
		response: {
			data?: GapSuppliesDeliveryNotesCreateOneSuppliesDeliveryNoteResponse["data"];
			error?: ClientOperationErrors;
		};
		requiresAuthentication: true;
	};
	"Gap/SuppliesDeliveryNotes/DeleteOneSuppliesDeliveryNote": {
		input: GapSuppliesDeliveryNotesDeleteOneSuppliesDeliveryNoteInput;
		response: {
			data?: GapSuppliesDeliveryNotesDeleteOneSuppliesDeliveryNoteResponse["data"];
			error?: ClientOperationErrors;
		};
		requiresAuthentication: true;
	};
	"Gap/SuppliesDeliveryNotes/UpdateOneSuppliesDeliveryNote": {
		input: GapSuppliesDeliveryNotesUpdateOneSuppliesDeliveryNoteInput;
		response: {
			data?: GapSuppliesDeliveryNotesUpdateOneSuppliesDeliveryNoteResponse["data"];
			error?: ClientOperationErrors;
		};
		requiresAuthentication: true;
	};
	"Modality/switchModality": {
		input: ModalitySwitchModalityInput;
		response: { data?: ModalitySwitchModalityResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Modality/updateOneModality": {
		input: ModalityUpdateOneModalityInput;
		response: { data?: ModalityUpdateOneModalityResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"PatientScannedDocuments/deletePatientScannedDocuments": {
		input: PatientScannedDocumentsDeletePatientScannedDocumentsInput;
		response: {
			data?: PatientScannedDocumentsDeletePatientScannedDocumentsResponse["data"];
			error?: ClientOperationErrors;
		};
		requiresAuthentication: true;
	};
	"WorkingLists/createOneWorkingList": {
		input: WorkingListsCreateOneWorkingListInput;
		response: { data?: WorkingListsCreateOneWorkingListResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"WorkingLists/deleteOneWorkingList": {
		input: WorkingListsDeleteOneWorkingListInput;
		response: { data?: WorkingListsDeleteOneWorkingListResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"WorkingLists/linkWorkingList": {
		input: WorkingListsLinkWorkingListInput;
		response: { data?: WorkingListsLinkWorkingListResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"WorkingLists/toggleLockWorkingList": {
		input: WorkingListsToggleLockWorkingListInput;
		response: { data?: WorkingListsToggleLockWorkingListResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"clinicalDiagnostics/indexClinicalDiagnostic": {
		input?: undefined;
		response: { data?: ClinicalDiagnosticsIndexClinicalDiagnosticResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"clinicalEvents/createOneClinicalEvent": {
		input: ClinicalEventsCreateOneClinicalEventInput;
		response: { data?: ClinicalEventsCreateOneClinicalEventResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"clinicalEvents/deleteOneClinicalEvent": {
		input: ClinicalEventsDeleteOneClinicalEventInput;
		response: { data?: ClinicalEventsDeleteOneClinicalEventResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"consultationList/closeConsultation": {
		input: ConsultationListCloseConsultationInput;
		response: { data?: ConsultationListCloseConsultationResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"consultationList/registerPatient": {
		input: ConsultationListRegisterPatientInput;
		response: { data?: ConsultationListRegisterPatientResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"consultationList/toggleActivePatient": {
		input: ConsultationListToggleActivePatientInput;
		response: { data?: ConsultationListToggleActivePatientResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"consultationList/unregisterPatient": {
		input: ConsultationListUnregisterPatientInput;
		response: { data?: ConsultationListUnregisterPatientResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"mobileDevices/addMobileDeviceMutation": {
		input: MobileDevicesAddMobileDeviceMutationInput;
		response: { data?: MobileDevicesAddMobileDeviceMutationResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"mobileDevices/registerOneMobileDevice": {
		input: MobileDevicesRegisterOneMobileDeviceInput;
		response: { data?: MobileDevicesRegisterOneMobileDeviceResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"mobileDevices/removeMobileDevice": {
		input: MobileDevicesRemoveMobileDeviceInput;
		response: { data?: MobileDevicesRemoveMobileDeviceResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"mobileDevices/resetMobileDevice": {
		input: MobileDevicesResetMobileDeviceInput;
		response: { data?: MobileDevicesResetMobileDeviceResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"mobileDevices/switchMobileDevice": {
		input: MobileDevicesSwitchMobileDeviceInput;
		response: { data?: MobileDevicesSwitchMobileDeviceResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"mobileDevices/updateMobileDeviceExpiration": {
		input: MobileDevicesUpdateMobileDeviceExpirationInput;
		response: { data?: MobileDevicesUpdateMobileDeviceExpirationResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"patients/MovePatientFolderToTrash": {
		input: PatientsMovePatientFolderToTrashInput;
		response: { data?: PatientsMovePatientFolderToTrashResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"patients/add_One_patient_to_index": {
		input: PatientsAdd_One_patient_to_indexInput;
		response: { data?: PatientsAdd_One_patient_to_indexResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"patients/index_patients": {
		input?: undefined;
		response: { data?: PatientsIndex_patientsResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"patients/mobileUpdateOnePatient": {
		input: PatientsMobileUpdateOnePatientInput;
		response: { data?: PatientsMobileUpdateOnePatientResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"patients/toggleSelectedTrashPatient": {
		input: PatientsToggleSelectedTrashPatientInput;
		response: { data?: PatientsToggleSelectedTrashPatientResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"patients/updateOnePatient": {
		input: PatientsUpdateOnePatientInput;
		response: { data?: PatientsUpdateOnePatientResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"users/updateDocumentViewSettings": {
		input: UsersUpdateDocumentViewSettingsInput;
		response: { data?: UsersUpdateDocumentViewSettingsResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"WorkingLists/refreshLinkExam": {
		input: WorkingListsRefreshLinkExamInput;
		response: {
			data?: WorkingListsRefreshLinkExamResponseData;
			error?: OperationErrors["WorkingLists/refreshLinkExam"];
		};
		requiresAuthentication: true;
	};
	"users/update": {
		input: UsersUpdateInput;
		response: { data?: UsersUpdateResponseData; error?: OperationErrors["users/update"] };
		requiresAuthentication: true;
	};
};

export type Subscriptions = {
	"DataTable/insertDataSubscription": {
		input: DataTableInsertDataSubscriptionInput;
		response: { data?: DataTableInsertDataSubscriptionResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"users/subscribe": {
		input: UsersSubscribeInput;
		response: { data?: UsersSubscribeResponseData; error?: OperationErrors["users/subscribe"] };
		requiresAuthentication: true;
	};
	"WorkingLists/linkExam": {
		input: WorkingListsLinkExamInput;
		response: { data?: WorkingListsLinkExamResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: true;
	};
	"users/get": {
		input?: undefined;
		response: { data?: UsersGetResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: true;
	};
};

export type LiveQueries = {
	"WorkingLists/linkExam": {
		input: WorkingListsLinkExamInput;
		response: { data?: WorkingListsLinkExamResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: true;
	};
	"users/get": {
		input?: undefined;
		response: { data?: UsersGetResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: true;
	};
};

export interface Operations
	extends OperationsDefinition<
		Queries,
		Mutations,
		Subscriptions,
		LiveQueries,
		UserRole,
		S3Providers,
		keyof typeof AuthProviderId
	> {}
