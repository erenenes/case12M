/*!
* DevExtreme (dx.messages.sl.js)
* Version: 21.1.6
* Build date: Mon Sep 27 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

! function(root, factory) {
    if ("function" === typeof define && define.amd) {
        define((function(require) {
            factory(require("devextreme/localization"))
        }))
    } else if ("object" === typeof module && module.exports) {
        factory(require("devextreme/localization"))
    } else {
        factory(DevExpress.localization)
    }
}(0, (function(localization) {
    localization.loadMessages({
        sl: {
            Yes: "Da",
            No: "Ne",
            Cancel: "Prekli\u010di",
            Clear: "Pobri\u0161i",
            Done: "Kon\u010dano",
            Loading: "Nalagam...",
            Select: "Izberi...",
            Search: "I\u0161\u010di",
            Back: "Nazaj",
            OK: "V redu",
            "dxCollectionWidget-noDataText": "Ni podatkov za prikaz",
            "dxDropDownEditor-selectLabel": "Izberi",
            "validation-required": "Obvezen podatek",
            "validation-required-formatted": "Podatek {0} je obvezen",
            "validation-numeric": "Vrednost mora biti \u0161tevilo",
            "validation-numeric-formatted": "{0} mora biti \u0161tevilo",
            "validation-range": "Vrednost je izven obmo\u010dja",
            "validation-range-formatted": "{0} je izven obmo\u010dja",
            "validation-stringLength": "Neustrezna dol\u017eina podatka",
            "validation-stringLength-formatted": "Dol\u017eina {0} ni ustrezna",
            "validation-custom": "Vrednost ni pravilna",
            "validation-custom-formatted": "Vrednost {0} je nepravilna",
            "validation-compare": "Vrednosti se ne ujemata",
            "validation-compare-formatted": "{0} se ne ujema",
            "validation-pattern": "Vrednost ne ustreza vzorcu",
            "validation-pattern-formatted": "{0} ne ustreza vzorcu",
            "validation-email": "Email je neveljaven",
            "validation-email-formatted": "{0} je neveljaven",
            "validation-mask": "Vrednost je napa\u010dna",
            "dxLookup-searchPlaceholder": "Najmanj\u0161e \u0161tevilo znakov: {0}",
            "dxList-pullingDownText": "Povlecite navzdol za osve\u017eitev...",
            "dxList-pulledDownText": "Spustite za osve\u017eitev...",
            "dxList-refreshingText": "Osve\u017eujem...",
            "dxList-pageLoadingText": "Nalagam...",
            "dxList-nextButtonText": "Ve\u010d",
            "dxList-selectAll": "Izberi vse",
            "dxListEditDecorator-delete": "Izbri\u0161i",
            "dxListEditDecorator-more": "Ve\u010d",
            "dxScrollView-pullingDownText": "Povlecite navzdol za osve\u017eitev...",
            "dxScrollView-pulledDownText": "Spustite za osve\u017eitev...",
            "dxScrollView-refreshingText": "Osve\u017eujem...",
            "dxScrollView-reachBottomText": "Nalagam...",
            "dxDateBox-simulatedDataPickerTitleTime": "Izberi \u010das",
            "dxDateBox-simulatedDataPickerTitleDate": "Izberi datum",
            "dxDateBox-simulatedDataPickerTitleDateTime": "Izberi datum in \u010das",
            "dxDateBox-validation-datetime": "Vrednost mora biti datum ali \u010das",
            "dxFileUploader-selectFile": "Izberi datoteko",
            "dxFileUploader-dropFile": "ali spusti datoteko tukaj",
            "dxFileUploader-bytes": "bajtov",
            "dxFileUploader-kb": "kb",
            "dxFileUploader-Mb": "Mb",
            "dxFileUploader-Gb": "Gb",
            "dxFileUploader-upload": "Nalo\u017ei",
            "dxFileUploader-uploaded": "Nalo\u017eeno",
            "dxFileUploader-readyToUpload": "Pripravljeno za nalaganje",
            "dxFileUploader-uploadAbortedMessage": "TODO",
            "dxFileUploader-uploadFailedMessage": "Nalaganje je spodletelo",
            "dxFileUploader-invalidFileExtension": "Tip datoteke ni dovoljen",
            "dxFileUploader-invalidMaxFileSize": "Datoteka je prevelika",
            "dxFileUploader-invalidMinFileSize": "Datoteka je premajhna",
            "dxRangeSlider-ariaFrom": "Od",
            "dxRangeSlider-ariaTill": "Do",
            "dxSwitch-switchedOnText": "Vklopljeno",
            "dxSwitch-switchedOffText": "Izklopljeno",
            "dxForm-optionalMark": "opcijsko",
            "dxForm-requiredMessage": "Podatek {0} je obvezen",
            "dxNumberBox-invalidValueMessage": "Vrednost mora biti \u0161tevilo",
            "dxNumberBox-noDataText": "Ni podatkov",
            "dxDataGrid-columnChooserTitle": "Izbirnik stolpcev",
            "dxDataGrid-columnChooserEmptyText": "Povlecite stolpec sem, da ga skrijete",
            "dxDataGrid-groupContinuesMessage": "Nadaljevanje na naslednji strani",
            "dxDataGrid-groupContinuedMessage": "Nadaljevanje iz prej\u0161nje strani",
            "dxDataGrid-groupHeaderText": "Zdru\u017ei po tem stolpcu",
            "dxDataGrid-ungroupHeaderText": "Razdru\u017ei",
            "dxDataGrid-ungroupAllText": "Razdru\u017ei vse",
            "dxDataGrid-editingEditRow": "Uredi",
            "dxDataGrid-editingSaveRowChanges": "Shrani",
            "dxDataGrid-editingCancelRowChanges": "Prekli\u010di",
            "dxDataGrid-editingDeleteRow": "Bri\u0161i",
            "dxDataGrid-editingUndeleteRow": "Razveljavi brisanje",
            "dxDataGrid-editingConfirmDeleteMessage": "Ste prepri\u010dani, da \u017eelite izbrisati ta zapis?",
            "dxDataGrid-validationCancelChanges": "Prekli\u010di spremembe",
            "dxDataGrid-groupPanelEmptyText": "Povleci glavo stolpca sem za zdru\u017eevanje po tem stolpcu",
            "dxDataGrid-noDataText": "Ni podatkov",
            "dxDataGrid-searchPanelPlaceholder": "I\u0161\u010di...",
            "dxDataGrid-filterRowShowAllText": "(Vse)",
            "dxDataGrid-filterRowResetOperationText": "Ponastavi",
            "dxDataGrid-filterRowOperationEquals": "Enako",
            "dxDataGrid-filterRowOperationNotEquals": "Ni enako",
            "dxDataGrid-filterRowOperationLess": "Manj od",
            "dxDataGrid-filterRowOperationLessOrEquals": "Manj ali enako kot",
            "dxDataGrid-filterRowOperationGreater": "Ve\u010dje kot",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "Ve\u010dje ali enako kot",
            "dxDataGrid-filterRowOperationStartsWith": "Se za\u010dne",
            "dxDataGrid-filterRowOperationContains": "Vsebuje",
            "dxDataGrid-filterRowOperationNotContains": "Ne vsebuje",
            "dxDataGrid-filterRowOperationEndsWith": "Se kon\u010da z",
            "dxDataGrid-filterRowOperationBetween": "Je med",
            "dxDataGrid-filterRowOperationBetweenStartText": "Za\u010detek",
            "dxDataGrid-filterRowOperationBetweenEndText": "Konec",
            "dxDataGrid-applyFilterText": "Uporabi filter",
            "dxDataGrid-trueText": "Da",
            "dxDataGrid-falseText": "Ne",
            "dxDataGrid-sortingAscendingText": "Razvrsti nara\u0161\u010dajo\u010de",
            "dxDataGrid-sortingDescendingText": "Razvrsti padajo\u010de",
            "dxDataGrid-sortingClearText": "Brez razvr\u0161\u010danja",
            "dxDataGrid-editingSaveAllChanges": "Shrani spremembe",
            "dxDataGrid-editingCancelAllChanges": "Zavrzi spremembe",
            "dxDataGrid-editingAddRow": "Dodaj vrstico",
            "dxDataGrid-summaryMin": "Min: {0}",
            "dxDataGrid-summaryMinOtherColumn": "Min od {1} je {0}",
            "dxDataGrid-summaryMax": "Maks: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "Maks od {1} je {0}",
            "dxDataGrid-summaryAvg": "Povpr: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "Povpr. od {1} je {0}",
            "dxDataGrid-summarySum": "Skupaj: {0}",
            "dxDataGrid-summarySumOtherColumn": "Skupaj od {1} je {0}",
            "dxDataGrid-summaryCount": "\u0160tevilo: {0}",
            "dxDataGrid-columnFixingFix": "Popravi",
            "dxDataGrid-columnFixingUnfix": "Ne popravi",
            "dxDataGrid-columnFixingLeftPosition": "Levo",
            "dxDataGrid-columnFixingRightPosition": "Desno",
            "dxDataGrid-exportTo": "Izvozi",
            "dxDataGrid-exportToExcel": "Izvozi v Excel datoteko",
            "dxDataGrid-exporting": "Izvozi...",
            "dxDataGrid-excelFormat": "Excel datoteka",
            "dxDataGrid-selectedRows": "Izbrane vrstice",
            "dxDataGrid-exportSelectedRows": "Izvozi izbrane vrstice",
            "dxDataGrid-exportAll": "Izvozi vse podatke",
            "dxDataGrid-headerFilterEmptyValue": "(Prazno)",
            "dxDataGrid-headerFilterOK": "V redu",
            "dxDataGrid-headerFilterCancel": "Prekli\u010di",
            "dxDataGrid-ariaColumn": "Stolpec",
            "dxDataGrid-ariaValue": "Vrednost",
            "dxDataGrid-ariaFilterCell": "Filtriraj po celici",
            "dxDataGrid-ariaCollapse": "Skr\u010di",
            "dxDataGrid-ariaExpand": "Raz\u0161iri",
            "dxDataGrid-ariaDataGrid": "Tabela",
            "dxDataGrid-ariaSearchInGrid": "I\u0161\u010di v tabeli",
            "dxDataGrid-ariaSelectAll": "Izberi vse",
            "dxDataGrid-ariaSelectRow": "Izberi vrstico",
            "dxDataGrid-filterBuilderPopupTitle": "Graditelj filtra",
            "dxDataGrid-filterPanelCreateFilter": "Ustvari filter",
            "dxDataGrid-filterPanelClearFilter": "Pobri\u0161i",
            "dxDataGrid-filterPanelFilterEnabledHint": "Omogo\u010di filtriranje",
            "dxTreeList-ariaTreeList": "Drevesni seznam",
            "dxTreeList-editingAddRowToNode": "Dodaj",
            "dxPager-infoText": "Stran {0} od {1} ({2} zapisov)",
            "dxPager-pagesCountText": "od",
            "dxPager-pageSizesAllText": "Vse",
            "dxPivotGrid-grandTotal": "Skupna vsota",
            "dxPivotGrid-total": "{0} skupaj",
            "dxPivotGrid-fieldChooserTitle": "Izbirnik polj",
            "dxPivotGrid-showFieldChooser": "Prika\u017ei izbirnik polj",
            "dxPivotGrid-expandAll": "Raz\u0161iri vse",
            "dxPivotGrid-collapseAll": "Skr\u010di vse",
            "dxPivotGrid-sortColumnBySummary": 'Razvrsti "{0}" po tem stolpcu',
            "dxPivotGrid-sortRowBySummary": 'Razvrsti "{0}" po tej vrstici',
            "dxPivotGrid-removeAllSorting": "Brez razvr\u0161\u010danja",
            "dxPivotGrid-dataNotAvailable": "Ni na voljo",
            "dxPivotGrid-rowFields": "Vrstice",
            "dxPivotGrid-columnFields": "Stolpci",
            "dxPivotGrid-dataFields": "Podatki",
            "dxPivotGrid-filterFields": "Filtri",
            "dxPivotGrid-allFields": "Vsa polja",
            "dxPivotGrid-columnFieldArea": "Povleci stolpce tukaj",
            "dxPivotGrid-dataFieldArea": "Povleci podatke tukaj",
            "dxPivotGrid-rowFieldArea": "Povleci vrstice tukaj",
            "dxPivotGrid-filterFieldArea": "Povleci filtre tukaj",
            "dxScheduler-editorLabelTitle": "Predmet",
            "dxScheduler-editorLabelStartDate": "Datum za\u010detka",
            "dxScheduler-editorLabelEndDate": "Datum konca",
            "dxScheduler-editorLabelDescription": "Opis",
            "dxScheduler-editorLabelRecurrence": "Ponovi",
            "dxScheduler-openAppointment": "Odpri dogodek",
            "dxScheduler-recurrenceNever": "Nikoli",
            "dxScheduler-recurrenceMinutely": "Minutely",
            "dxScheduler-recurrenceHourly": "Hourly",
            "dxScheduler-recurrenceDaily": "Dnevno",
            "dxScheduler-recurrenceWeekly": "Tedensko",
            "dxScheduler-recurrenceMonthly": "Mese\u010dno",
            "dxScheduler-recurrenceYearly": "Letno",
            "dxScheduler-recurrenceRepeatEvery": "Ponovi vsak",
            "dxScheduler-recurrenceRepeatOn": "Ponovi na",
            "dxScheduler-recurrenceEnd": "Zaklju\u010di ponavljanje",
            "dxScheduler-recurrenceAfter": "Po",
            "dxScheduler-recurrenceOn": "Vklopljeno",
            "dxScheduler-recurrenceRepeatMinutely": "minute(s)",
            "dxScheduler-recurrenceRepeatHourly": "hour(s)",
            "dxScheduler-recurrenceRepeatDaily": "dan/dni",
            "dxScheduler-recurrenceRepeatWeekly": "teden/tednov",
            "dxScheduler-recurrenceRepeatMonthly": "mesec/mesecev",
            "dxScheduler-recurrenceRepeatYearly": "let",
            "dxScheduler-switcherDay": "Dan",
            "dxScheduler-switcherWeek": "Teden",
            "dxScheduler-switcherWorkWeek": "Delovni teden",
            "dxScheduler-switcherMonth": "Mesec",
            "dxScheduler-switcherAgenda": "Urnik",
            "dxScheduler-switcherTimelineDay": "Dnevna \u010dasovnica",
            "dxScheduler-switcherTimelineWeek": "Tedenska \u010dasovnica",
            "dxScheduler-switcherTimelineWorkWeek": "\u010casovnica delovnega tedna",
            "dxScheduler-switcherTimelineMonth": "Mese\u010dna \u010dasovnica",
            "dxScheduler-recurrenceRepeatOnDate": "na dan",
            "dxScheduler-recurrenceRepeatCount": "pojavitev",
            "dxScheduler-allDay": "Ves dan",
            "dxScheduler-confirmRecurrenceEditMessage": "\u017delite urediti samo ta dogodek ali tudi nadaljne ponovitve?",
            "dxScheduler-confirmRecurrenceDeleteMessage": "\u017delite izbrisati samo izbrani dogodek ali tudi nadaljne ponovitve?",
            "dxScheduler-confirmRecurrenceEditSeries": "Uredi niz dogodkov",
            "dxScheduler-confirmRecurrenceDeleteSeries": "Izbri\u0161i niz dogodkov",
            "dxScheduler-confirmRecurrenceEditOccurrence": "Uredi dogodek",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "Izbri\u0161i dogodek",
            "dxScheduler-noTimezoneTitle": "Brez \u010dasovnega pasa",
            "dxScheduler-moreAppointments": "\u0161e {0}",
            "dxCalendar-todayButtonText": "Danes",
            "dxCalendar-ariaWidgetName": "Koledar",
            "dxColorView-ariaRed": "Rde\u010da",
            "dxColorView-ariaGreen": "Zelena",
            "dxColorView-ariaBlue": "Modra",
            "dxColorView-ariaAlpha": "Prosojno",
            "dxColorView-ariaHex": "Koda barve (hex)",
            "dxTagBox-selected": "{0} izbranih",
            "dxTagBox-allSelected": "Vsi izbrani ({0})",
            "dxTagBox-moreSelected": "\u0161e {0}",
            "vizExport-printingButtonText": "Natisni",
            "vizExport-titleMenuText": "Izvozi/Natisni",
            "vizExport-exportButtonText": "{0} datoteka",
            "dxFilterBuilder-and": "In",
            "dxFilterBuilder-or": "Ali",
            "dxFilterBuilder-notAnd": "In ne",
            "dxFilterBuilder-notOr": "Ali ne",
            "dxFilterBuilder-addCondition": "Dodaj pogoj",
            "dxFilterBuilder-addGroup": "Dodaj skupino",
            "dxFilterBuilder-enterValueText": "<vnesi vrednost>",
            "dxFilterBuilder-filterOperationEquals": "Enako",
            "dxFilterBuilder-filterOperationNotEquals": "Ni enako",
            "dxFilterBuilder-filterOperationLess": "Je manj kot",
            "dxFilterBuilder-filterOperationLessOrEquals": "Je manj ali enako kot",
            "dxFilterBuilder-filterOperationGreater": "Je ve\u010dje kot",
            "dxFilterBuilder-filterOperationGreaterOrEquals": "Je ve\u010dje ali enako kot",
            "dxFilterBuilder-filterOperationStartsWith": "Se za\u010dne z",
            "dxFilterBuilder-filterOperationContains": "Vsebuje",
            "dxFilterBuilder-filterOperationNotContains": "Ne vsebuje",
            "dxFilterBuilder-filterOperationEndsWith": "Se kon\u010da z",
            "dxFilterBuilder-filterOperationIsBlank": "Je prazno",
            "dxFilterBuilder-filterOperationIsNotBlank": "Ni prazno",
            "dxFilterBuilder-filterOperationBetween": "Je med",
            "dxFilterBuilder-filterOperationAnyOf": "Je karkoli izmed",
            "dxFilterBuilder-filterOperationNoneOf": "Ni ni\u010d izmed",
            "dxHtmlEditor-dialogColorCaption": "Zamenjaj barvo pisave",
            "dxHtmlEditor-dialogBackgroundCaption": "Zamenjaj barvo ozadja",
            "dxHtmlEditor-dialogLinkCaption": "Dodaj povezavo",
            "dxHtmlEditor-dialogLinkUrlField": "URL",
            "dxHtmlEditor-dialogLinkTextField": "Tekst",
            "dxHtmlEditor-dialogLinkTargetField": "Odpri povezvo v novem oknu",
            "dxHtmlEditor-dialogImageCaption": "Dodaj sliko",
            "dxHtmlEditor-dialogImageUrlField": "URL",
            "dxHtmlEditor-dialogImageAltField": "Dodatno besedilo",
            "dxHtmlEditor-dialogImageWidthField": "\u0160irina (px)",
            "dxHtmlEditor-dialogImageHeightField": "Vi\u0161ina (px)",
            "dxHtmlEditor-dialogInsertTableRowsField": "!TODO",
            "dxHtmlEditor-dialogInsertTableColumnsField": "!TODO",
            "dxHtmlEditor-dialogInsertTableCaption": "!TODO",
            "dxHtmlEditor-heading": "Naslov",
            "dxHtmlEditor-normalText": "Obi\u010dajno besedilo",
            "dxHtmlEditor-background": "TODO",
            "dxHtmlEditor-bold": "TODO",
            "dxHtmlEditor-color": "TODO",
            "dxHtmlEditor-font": "TODO",
            "dxHtmlEditor-italic": "TODO",
            "dxHtmlEditor-link": "TODO",
            "dxHtmlEditor-image": "TODO",
            "dxHtmlEditor-size": "TODO",
            "dxHtmlEditor-strike": "TODO",
            "dxHtmlEditor-subscript": "TODO",
            "dxHtmlEditor-superscript": "TODO",
            "dxHtmlEditor-underline": "TODO",
            "dxHtmlEditor-blockquote": "TODO",
            "dxHtmlEditor-header": "TODO",
            "dxHtmlEditor-increaseIndent": "TODO",
            "dxHtmlEditor-decreaseIndent": "TODO",
            "dxHtmlEditor-orderedList": "TODO",
            "dxHtmlEditor-bulletList": "TODO",
            "dxHtmlEditor-alignLeft": "TODO",
            "dxHtmlEditor-alignCenter": "TODO",
            "dxHtmlEditor-alignRight": "TODO",
            "dxHtmlEditor-alignJustify": "TODO",
            "dxHtmlEditor-codeBlock": "TODO",
            "dxHtmlEditor-variable": "TODO",
            "dxHtmlEditor-undo": "TODO",
            "dxHtmlEditor-redo": "TODO",
            "dxHtmlEditor-clear": "TODO",
            "dxHtmlEditor-insertTable": "TODO",
            "dxHtmlEditor-insertRowAbove": "TODO",
            "dxHtmlEditor-insertRowBelow": "TODO",
            "dxHtmlEditor-insertColumnLeft": "TODO",
            "dxHtmlEditor-insertColumnRight": "TODO",
            "dxHtmlEditor-deleteColumn": "TODO",
            "dxHtmlEditor-deleteRow": "TODO",
            "dxHtmlEditor-deleteTable": "TODO",
            "dxHtmlEditor-list": "TODO",
            "dxHtmlEditor-ordered": "TODO",
            "dxHtmlEditor-bullet": "TODO",
            "dxHtmlEditor-align": "TODO",
            "dxHtmlEditor-center": "TODO",
            "dxHtmlEditor-left": "TODO",
            "dxHtmlEditor-right": "TODO",
            "dxHtmlEditor-indent": "TODO",
            "dxHtmlEditor-justify": "TODO",
            "dxFileManager-newDirectoryName": "Neimenovana mapa",
            "dxFileManager-errorNoAccess": "Dostop zavrnjen. Operacija ne more biti kon\u010dana.",
            "dxFileManager-errorDirectoryExistsFormat": "Mapa '{0}' \u017ee obstaja.",
            "dxFileManager-errorFileExistsFormat": "Datoteka '{0}' \u017ee obstaja.",
            "dxFileManager-errorFileNotFoundFormat": "Datoteka '{0}' ni bila najdena",
            "dxFileManager-errorDefault": "Neznana napaka.",
            "dxFileManager-rootDirectoryName": "TODO",
            "dxFileManager-errorDirectoryNotFoundFormat": "TODO",
            "dxFileManager-errorWrongFileExtension": "TODO",
            "dxFileManager-errorMaxFileSizeExceeded": "TODO",
            "dxFileManager-errorInvalidSymbols": "TODO",
            "dxFileManager-errorDirectoryOpenFailed": "TODO",
            "dxDiagram-categoryGeneral": "TODO",
            "dxDiagram-categoryFlowchart": "TODO",
            "dxDiagram-categoryOrgChart": "TODO",
            "dxDiagram-categoryContainers": "TODO",
            "dxDiagram-categoryCustom": "TODO",
            "dxDiagram-commandExportToSvg": "TODO",
            "dxDiagram-commandExportToPng": "TODO",
            "dxDiagram-commandExportToJpg": "TODO",
            "dxDiagram-commandUndo": "TODO",
            "dxDiagram-commandRedo": "TODO",
            "dxDiagram-commandFontName": "TODO",
            "dxDiagram-commandFontSize": "TODO",
            "dxDiagram-commandBold": "TODO",
            "dxDiagram-commandItalic": "TODO",
            "dxDiagram-commandUnderline": "TODO",
            "dxDiagram-commandTextColor": "TODO",
            "dxDiagram-commandLineColor": "TODO",
            "dxDiagram-commandLineWidth": "TODO",
            "dxDiagram-commandLineStyle": "TODO",
            "dxDiagram-commandLineStyleSolid": "TODO",
            "dxDiagram-commandLineStyleDotted": "TODO",
            "dxDiagram-commandLineStyleDashed": "TODO",
            "dxDiagram-commandFillColor": "TODO",
            "dxDiagram-commandAlignLeft": "TODO",
            "dxDiagram-commandAlignCenter": "TODO",
            "dxDiagram-commandAlignRight": "TODO",
            "dxDiagram-commandConnectorLineType": "TODO",
            "dxDiagram-commandConnectorLineStraight": "TODO",
            "dxDiagram-commandConnectorLineOrthogonal": "TODO",
            "dxDiagram-commandConnectorLineStart": "TODO",
            "dxDiagram-commandConnectorLineEnd": "TODO",
            "dxDiagram-commandConnectorLineNone": "TODO",
            "dxDiagram-commandConnectorLineArrow": "TODO",
            "dxDiagram-commandFullscreen": "TODO",
            "dxDiagram-commandUnits": "TODO",
            "dxDiagram-commandPageSize": "TODO",
            "dxDiagram-commandPageOrientation": "TODO",
            "dxDiagram-commandPageOrientationLandscape": "TODO",
            "dxDiagram-commandPageOrientationPortrait": "TODO",
            "dxDiagram-commandPageColor": "TODO",
            "dxDiagram-commandShowGrid": "TODO",
            "dxDiagram-commandSnapToGrid": "TODO",
            "dxDiagram-commandGridSize": "TODO",
            "dxDiagram-commandZoomLevel": "TODO",
            "dxDiagram-commandAutoZoom": "TODO",
            "dxDiagram-commandFitToContent": "TODO",
            "dxDiagram-commandFitToWidth": "TODO",
            "dxDiagram-commandAutoZoomByContent": "TODO",
            "dxDiagram-commandAutoZoomByWidth": "TODO",
            "dxDiagram-commandSimpleView": "TODO",
            "dxDiagram-commandCut": "TODO",
            "dxDiagram-commandCopy": "TODO",
            "dxDiagram-commandPaste": "TODO",
            "dxDiagram-commandSelectAll": "TODO",
            "dxDiagram-commandDelete": "TODO",
            "dxDiagram-commandBringToFront": "TODO",
            "dxDiagram-commandSendToBack": "TODO",
            "dxDiagram-commandLock": "TODO",
            "dxDiagram-commandUnlock": "TODO",
            "dxDiagram-commandInsertShapeImage": "TODO",
            "dxDiagram-commandEditShapeImage": "TODO",
            "dxDiagram-commandDeleteShapeImage": "TODO",
            "dxDiagram-commandLayoutLeftToRight": "TODO",
            "dxDiagram-commandLayoutRightToLeft": "TODO",
            "dxDiagram-commandLayoutTopToBottom": "TODO",
            "dxDiagram-commandLayoutBottomToTop": "TODO",
            "dxDiagram-unitIn": "TODO",
            "dxDiagram-unitCm": "TODO",
            "dxDiagram-unitPx": "TODO",
            "dxDiagram-dialogButtonOK": "TODO",
            "dxDiagram-dialogButtonCancel": "TODO",
            "dxDiagram-dialogInsertShapeImageTitle": "TODO",
            "dxDiagram-dialogEditShapeImageTitle": "TODO",
            "dxDiagram-dialogEditShapeImageSelectButton": "TODO",
            "dxDiagram-dialogEditShapeImageLabelText": "TODO",
            "dxDiagram-uiExport": "TODO",
            "dxDiagram-uiProperties": "TODO",
            "dxDiagram-uiSettings": "TODO",
            "dxDiagram-uiShowToolbox": "TODO",
            "dxDiagram-uiSearch": "TODO",
            "dxDiagram-uiStyle": "TODO",
            "dxDiagram-uiLayout": "TODO",
            "dxDiagram-uiLayoutTree": "TODO",
            "dxDiagram-uiLayoutLayered": "TODO",
            "dxDiagram-uiDiagram": "TODO",
            "dxDiagram-uiText": "TODO",
            "dxDiagram-uiObject": "TODO",
            "dxDiagram-uiConnector": "TODO",
            "dxDiagram-uiPage": "TODO",
            "dxDiagram-shapeText": "TODO",
            "dxDiagram-shapeRectangle": "TODO",
            "dxDiagram-shapeEllipse": "TODO",
            "dxDiagram-shapeCross": "TODO",
            "dxDiagram-shapeTriangle": "TODO",
            "dxDiagram-shapeDiamond": "TODO",
            "dxDiagram-shapeHeart": "TODO",
            "dxDiagram-shapePentagon": "TODO",
            "dxDiagram-shapeHexagon": "TODO",
            "dxDiagram-shapeOctagon": "TODO",
            "dxDiagram-shapeStar": "TODO",
            "dxDiagram-shapeArrowLeft": "TODO",
            "dxDiagram-shapeArrowUp": "TODO",
            "dxDiagram-shapeArrowRight": "TODO",
            "dxDiagram-shapeArrowDown": "TODO",
            "dxDiagram-shapeArrowUpDown": "TODO",
            "dxDiagram-shapeArrowLeftRight": "TODO",
            "dxDiagram-shapeProcess": "TODO",
            "dxDiagram-shapeDecision": "TODO",
            "dxDiagram-shapeTerminator": "TODO",
            "dxDiagram-shapePredefinedProcess": "TODO",
            "dxDiagram-shapeDocument": "TODO",
            "dxDiagram-shapeMultipleDocuments": "TODO",
            "dxDiagram-shapeManualInput": "TODO",
            "dxDiagram-shapePreparation": "TODO",
            "dxDiagram-shapeData": "TODO",
            "dxDiagram-shapeDatabase": "TODO",
            "dxDiagram-shapeHardDisk": "TODO",
            "dxDiagram-shapeInternalStorage": "TODO",
            "dxDiagram-shapePaperTape": "TODO",
            "dxDiagram-shapeManualOperation": "TODO",
            "dxDiagram-shapeDelay": "TODO",
            "dxDiagram-shapeStoredData": "TODO",
            "dxDiagram-shapeDisplay": "TODO",
            "dxDiagram-shapeMerge": "TODO",
            "dxDiagram-shapeConnector": "TODO",
            "dxDiagram-shapeOr": "TODO",
            "dxDiagram-shapeSummingJunction": "TODO",
            "dxDiagram-shapeContainerDefaultText": "TODO",
            "dxDiagram-shapeVerticalContainer": "TODO",
            "dxDiagram-shapeHorizontalContainer": "TODO",
            "dxDiagram-shapeCardDefaultText": "TODO",
            "dxDiagram-shapeCardWithImageOnLeft": "TODO",
            "dxDiagram-shapeCardWithImageOnTop": "TODO",
            "dxDiagram-shapeCardWithImageOnRight": "TODO",
            "dxGantt-dialogTitle": "TODO",
            "dxGantt-dialogStartTitle": "TODO",
            "dxGantt-dialogEndTitle": "TODO",
            "dxGantt-dialogProgressTitle": "TODO",
            "dxGantt-dialogResourcesTitle": "TODO",
            "dxGantt-dialogResourceManagerTitle": "TODO",
            "dxGantt-dialogTaskDetailsTitle": "TODO",
            "dxGantt-dialogEditResourceListHint": "TODO",
            "dxGantt-dialogEditNoResources": "TODO",
            "dxGantt-dialogButtonAdd": "TODO",
            "dxGantt-contextMenuNewTask": "TODO",
            "dxGantt-contextMenuNewSubtask": "TODO",
            "dxGantt-contextMenuDeleteTask": "TODO",
            "dxGantt-contextMenuDeleteDependency": "TODO",
            "dxGantt-dialogTaskDeleteConfirmation": "TODO",
            "dxGantt-dialogDependencyDeleteConfirmation": "TODO",
            "dxGantt-dialogResourcesDeleteConfirmation": "TODO",
            "dxGantt-dialogConstraintCriticalViolationMessage": "TODO",
            "dxGantt-dialogConstraintViolationMessage": "TODO",
            "dxGantt-dialogCancelOperationMessage": "TODO",
            "dxGantt-dialogDeleteDependencyMessage": "TODO",
            "dxGantt-dialogMoveTaskAndKeepDependencyMessage": "TODO",
            "dxGantt-undo": "TODO",
            "dxGantt-redo": "TODO",
            "dxGantt-expandAll": "TODO",
            "dxGantt-collapseAll": "TODO",
            "dxGantt-addNewTask": "TODO",
            "dxGantt-deleteSelectedTask": "TODO",
            "dxGantt-zoomIn": "TODO",
            "dxGantt-zoomOut": "TODO",
            "dxGantt-fullScreen": "TODO",
            "dxGantt-quarter": "TODO",
            "dxGantt-sortingAscendingText": "Razvrsti nara\u0161\u010dajo\u010de",
            "dxGantt-sortingDescendingText": "Razvrsti padajo\u010de",
            "dxGantt-sortingClearText": "Brez razvr\u0161\u010danja",
            "dxGantt-showResources": "TODO",
            "dxGantt-showDependencies": "TODO",
            "dxGantt-dialogStartDateValidation": "TODO",
            "dxGantt-dialogEndDateValidation": "TODO"
        }
    })
}));
