const ACTIONS = {
  REPORT_CARD_TEMPLATE_REQUEST: 'REPORT_CARD_TEMPLATE_REQUEST',
  REPORT_CARD_TEMPLATE_SUCCESS: 'REPORT_CARD_TEMPLATE_SUCCESS',
  TEMPLATE_FILEDS_REQUEST: 'TEMPLATE_FILEDS_REQUEST',
  TEMPLATE_FILEDS_REQUEST_SUCCESSFUL: 'TEMPLATE_FILEDS_REQUEST_SUCCESSFUL',
  TEMPLATE_FILEDS_UPDATE_SUCCESSFUL: 'TEMPLATE_FILEDS_UPDATE_SUCCESSFUL',
  GENERATE_TEMPLATE_REQUEST: 'GENERATE_TEMPLATE_REQUEST',
  CHECK_GENERATE_STATUS: 'CHECK_GENERATE_STATUS',
  GENERATE_REPORT_CARDS_REQUEST: 'GENERATE_REPORT_CARDS_REQUEST',
  GET_STUDENT_LIST_REQUEST: 'GET_STUDENT_LIST_REQUEST',
  STUDENT_LIST_SUCCESSFUL: 'STUDENT_LIST_SUCCESSFUL',
  STOP_POLLING: 'STOP_POLLING',
  POLLING_TIMEOUT: 'POLLING_TIMEOUT',

  GET_SECTION_EVALUATION_STRUCTURE: 'GET_SECTION_EVALUATION_STRUCTURE',
  GET_SECTION_EVALUATION_STRUCTURE_SUCCESS:
    'GET_SECTION_EVALUATION_STRUCTURE_SUCCESS',

  GET_TERM_EVALUATION_DETAILS: 'GET_TERM_EVALUATION_DETAILS',
  GET_TERM_EVALUATION_DETAILS_SUCCESS: 'GET_TERM_EVALUATION_DETAILS_SUCCESS',
  GET_TERM_EVALUATION_DETAILS_ERROR: 'GET_TERM_EVALUATION_DETAILS_ERROR',
  REMOVE_TERM_EVALUATION_DETAILS: 'REMOVE_TERM_EVALUATION_DETAILS',

  OPEN_EVALUATION: 'OPEN_EVALUATION',
  CLOSE_EVALUATION: 'CLOSE_EVALUATION',

  UPDATE_ACTIVE_STANDARD_AND_SECTION: 'UPDATE_ACTIVE_STANDARD_AND_SECTION',
  GET_STUDENT_EXAM_STRUCTURE: 'GET_STUDENT_EXAM_STRUCTURE',
  STUDENT_EXAM_STRUCTURE_SUCCESS: 'STUDENT_EXAM_STRUCTURE_SUCCESS',
  GET_EXAM_MARKS_DETAILS: 'GET_EXAM_MARKS_DETAILS',
  UPDATE_EXAM_MARKS_DETAILS: 'UPDATE_EXAM_MARKS_DETAILS',
  UPDATE_LOCAL_EXAM_MARKS_DETAILS: 'UPDATE_LOCAL_EXAM_MARKS_DETAILS',
  SAVE_STUDENT_MARKS_CHANGES: 'SAVE_STUDENT_MARKS_CHANGES',
  SAVE_STUDENT_MARKS_CHANGES_SUCCESS: 'SAVE_STUDENT_MARKS_CHANGES_SUCCESS',
  VALIDATE_CSV_DATA: 'VALIDATE_CSV_DATA',
  GET_VALIDATE_RESPONSE: 'GET_VALIDATE_RESPONSE',
  VALIDATE_RESPONSE_FAILED: 'VALIDATE_RESPONSE_FAILED',
  DOWNLOAD_CSV_CURRENT_MARKSHEET: 'DOWNLOAD_CSV_CURRENT_MARKSHEET',
  CURRENT_MARKSHEET_CSV_SUCCESSFUL: 'CURRENT_MARKSHEET_CSV_SUCCESSFUL',
  DOWNLOAD_CSV_WITH_ERROR_MARKSHEET: 'DOWNLOAD_CSV_WITH_ERROR_MARKSHEET',
  ERROR_MARKSHEET_CSV_SUCCESSFUL: 'ERROR_MARKSHEET_CSV_SUCCESSFUL',
  UPDATE_MARKS_FROM_CSV: 'UPDATE_MARKS_FROM_CSV',
  UPDATE_MARKS_FROM_CSV_SUCCESSFUL: 'UPDATE_MARKS_FROM_CSV_SUCCESSFUL',

  //edit_template
  SAVE_AS_DRAFT_REQUEST: 'SAVE_AS_DRAFT_REQUEST',
  SAVE_AS_DRAFT_SUCCESSFUL: 'SAVE_AS_DRAFT_SUCCESSFUL',
  SAVE_AS_DRAFT_FAILED: 'SAVE_AS_DRAFT_FAILED',
  PUBLISH_TEMPLATE_REQUEST: 'PUBLISH_TEMPLATE_REQUEST',
  PUBLISH_TEMPLATE_SUCCESSFUL: 'PUBLISH_TEMPLATE_SUCCESSFUL',
  GET_STUDENT_FIELDS_REQUEST: 'GET_STUDENT_FIELDS_REQUEST',
  GET_STUDENT_FIELDS_SUCCESSFUL: 'GET_STUDENT_FIELDS_SUCCESSFUL',
  GET_STUDENT_FIELDS_FAILED: 'GET_STUDENT_FIELDS_FAILED',
}

export default ACTIONS
