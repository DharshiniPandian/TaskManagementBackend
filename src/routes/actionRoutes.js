const express =  require('express')
const router = express.Router()
const createActionController = require('../controllers/action_controller/createAction')
const getActionController = require('../controllers/action_controller/getAction')
const updateActionController = require('../controllers/action_controller/updateAction')
const deleteActionController = require('../controllers/action_controller/deleteAction')

/**
 * @swagger
 * /action/:
 *  get:
 *      summary: Retrieve actions filtered by Goal ID or Phase ID
 *      description: Get all actions that match the provided Goal ID or Phase ID from the database, along with details such as action type, priority, status, and planned ETA.
 *      parameters:
 *          - in: query
 *            name: goal_id
 *            schema:
 *              type: uuid
 *            description: ID of the goal to filter actions
 *            required: false
 *            example: 1
 *          - in: query
 *            name: phase_id
 *            schema:
 *              type: uuid
 *            description: ID of the phase to filter actions
 *            required: false
 *            example: 2
 *      responses:
 *          200:
 *              description: Successfully retrieved all matching actions
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 *                              properties:
 *                                  id:
 *                                      type: integer
 *                                      description: The unique identifier of the action
 *                                      example: 1
 *                                  action_title:
 *                                      type: string
 *                                      description: Title of the action
 *                                      example: "Action 1"
 *                                  start_at:
 *                                      type: string
 *                                      format: date-time
 *                                      description: Start date and time of the action
 *                                      example: "2023-01-01T09:00:00.000Z"
 *                                  end_at:
 *                                      type: string
 *                                      format: date-time
 *                                      description: End date and time of the action
 *                                      example: "2023-01-10T17:00:00.000Z"
 *                                  actiontype:
 *                                      type: object
 *                                      properties:
 *                                          id:
 *                                              type: integer
 *                                              description: The ID of the action type
 *                                              example: 1
 *                                          name:
 *                                              type: string
 *                                              description: The name of the action type
 *                                              example: "Meeting"
 *                                  priority:
 *                                      type: object
 *                                      properties:
 *                                          id:
 *                                              type: integer
 *                                              description: The ID of the priority type
 *                                              example: 2
 *                                          name:
 *                                              type: string
 *                                              description: The name of the priority
 *                                              example: "High"
 *                                  actionstatus:
 *                                      type: object
 *                                      properties:
 *                                          id:
 *                                              type: integer
 *                                              description: The ID of the priority type
 *                                              example: 2
 *                                          name:
 *                                              type: string
 *                                              description: The name of the priority
 *                                              example: "Open"
 *                                  plannedeta:
 *                                      type: object
 *                                      properties:
 *                                          name:
 *                                              type: integer
 *                                              description: The estimated time frame for the action
 *                                              example: 20
 *          400:
 *              description: Bad request - Goal ID or Phase ID is required
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "Goal ID or Phase ID is required"
 *          500:
 *              description: Internal Server Error - Something went wrong with the server or database
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "Internal server error"
 */

router.get('/', getActionController.get_actions_by_goal_or_phase)

/**
 * @swagger
 * /action/create:
 *  post:
 *      summary: Create a new action
 *      description: Creates a new action with details such as goal, phase, title, priority, status, and assigns users if provided.
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - action_title
 *                          - start_at
 *                          - end_at
 *                          - priority_id
 *                          - action_type
 *                          - created_by
 *                      properties:
 *                          goal_id:
 *                              type: string
 *                              format: uuid
 *                              description: UUID of the associated goal (optional if phase_id is provided)
 *                              example: "123e4567-e89b-12d3-a456-426614174000"
 *                          phase_id:
 *                              type: string
 *                              format: uuid
 *                              description: UUID of the associated phase (optional if goal_id is provided)
 *                              example: "123e4567-e89b-12d3-a456-426614174001"
 *                          action_title:
 *                              type: string
 *                              description: Title of the action
 *                              example: "New Project Kickoff"
 *                          action_description:
 *                              type: string
 *                              description: A brief description of the action
 *                              example: "Kickoff meeting for the new project"
 *                          start_at:
 *                              type: string
 *                              format: date-time
 *                              description: Start date and time for the action
 *                              example: "2024-10-01T09:00:00.000Z"
 *                          end_at:
 *                              type: string
 *                              format: date-time
 *                              description: End date and time for the action
 *                              example: "2024-10-01T17:00:00.000Z"
 *                          planned_eta:
 *                              type: integer
 *                              description: Estimated time of completion in weeks
 *                              example: 4
 *                          custom_planned_eta:
 *                              type: integer
 *                              description: Custom estimated time of completion
 *                              example: 15
 *                          actual_eta:
 *                              type: integer
 *                              description: Actual estimated time of completion
 *                              example: 20
 *                          reason_id:
 *                              type: integer
 *                              description: ID of the reason associated with the action
 *                              example: 3
 *                          priority_id:
 *                              type: integer
 *                              description: ID of the priority level of the action
 *                              example: 2
 *                          action_type:
 *                              type: integer
 *                              description: ID of the type of action
 *                              example: 1
 *                          action_status:
 *                              type: integer
 *                              description: ID of the current status of the action
 *                              example: 1
 *                          status:
 *                              type: boolean
 *                              description: Indicates if the action is active
 *                              example: true
 *                          created_by:
 *                              type: integer
 *                              description: ID of the user who created the action
 *                              example: 101
 *                          users:
 *                              type: array
 *                              description: List of users assigned to the action with their roles
 *                              items:
 *                                  type: object
 *                                  properties:
 *                                      user_id:
 *                                          type: integer
 *                                          description: ID of the user
 *                                          example: 201
 *                                      is_owner:
 *                                          type: boolean
 *                                          description: Indicates if the user is the owner of the action
 *                                          example: true
 *                                      is_assignee:
 *                                          type: boolean
 *                                          description: Indicates if the user is an assignee for the action
 *                                          example: false
 *      responses:
 *          201:
 *              description: Action created successfully
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  description: Success message
 *                                  example: "Action created successfully"
 *                              action:
 *                                  type: object
 *                                  properties:
 *                                      id:
 *                                          type: string
 *                                          format: uuid
 *                                          description: UUID of the newly created action
 *                                          example: "123e4567-e89b-12d3-a456-426614174002"
 *                                      goal_id:
 *                                          type: string
 *                                          format: uuid
 *                                          description: UUID of the associated goal
 *                                          example: "123e4567-e89b-12d3-a456-426614174000"
 *                                      phase_id:
 *                                          type: string
 *                                          format: uuid
 *                                          description: UUID of the associated phase
 *                                          example: "123e4567-e89b-12d3-a456-426614174001"
 *                                      action_title:
 *                                          type: string
 *                                          description: Title of the action
 *                                          example: "New Project Kickoff"
 *                                      start_at:
 *                                          type: string
 *                                          format: date-time
 *                                          description: Start date and time for the action
 *                                          example: "2024-10-01T09:00:00.000Z"
 *                                      end_at:
 *                                          type: string
 *                                          format: date-time
 *                                          description: End date and time for the action
 *                                          example: "2024-10-01T17:00:00.000Z"
 *          400:
 *              description: Bad request - Missing required fields
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "Missing required fields"
 *          500:
 *              description: Internal server error - Something went wrong with the server or database
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "Internal server error"
 */

router.post('/create', createActionController.create_action)

/**
 * @swagger
 * /action/update/{id}:
 *  put:
 *      summary: Update an existing action
 *      description: Update details of an existing action using its UUID.
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema:
 *                type: string
 *                format: uuid
 *            description: UUID of the action to be updated
 *            example: "123e4567-e89b-12d3-a456-426614174003"
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          start_at:
 *                              type: string
 *                              format: date-time
 *                              description: Start date and time for the action
 *                              example: "2024-10-01T09:00:00.000Z"
 *                          end_at:
 *                              type: string
 *                              format: date-time
 *                              description: End date and time for the action
 *                              example: "2024-10-01T17:00:00.000Z"
 *                          planned_eta:
 *                              type: integer
 *                              description: Estimated time of completion in weeks
 *                              example: 4
 *                          custom_planned_eta:
 *                              type: integer
 *                              description: Custom estimated time of completion (overrides planned_eta if provided)
 *                              example: 15
 *                          actual_eta:
 *                              type: integer
 *                              description: Actual estimated time of completion
 *                              example: 20
 *                          reason_id:
 *                              type: integer
 *                              description: ID of the reason associated with the action
 *                              example: 3
 *                          priority_id:
 *                              type: integer
 *                              description: ID of the priority level of the action
 *                              example: 2
 *                          action_status:
 *                              type: integer
 *                              description: ID of the current status of the action
 *                              example: 1
 *                          status:
 *                              type: boolean
 *                              description: Indicates if the action is active
 *                              example: true
 *      responses:
 *          200:
 *              description: Action updated successfully
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "Action updated successfully"
 *                              action:
 *                                  type: object
 *                                  properties:
 *                                      id:
 *                                          type: string
 *                                          format: uuid
 *                                          description: UUID of the action
 *                                          example: "123e4567-e89b-12d3-a456-426614174003"
 *                                      goal_id:
 *                                          type: string
 *                                          format: uuid
 *                                          description: UUID of the associated goal
 *                                          example: "123e4567-e89b-12d3-a456-426614174000"
 *                                      phase_id:
 *                                          type: string
 *                                          format: uuid
 *                                          description: UUID of the associated phase
 *                                          example: "123e4567-e89b-12d3-a456-426614174001"
 *                                      action_title:
 *                                          type: string
 *                                          description: Title of the action
 *                                          example: "Updated Project Kickoff"
 *                                      start_at:
 *                                          type: string
 *                                          format: date-time
 *                                          description: Start date and time for the action
 *                                          example: "2024-10-01T09:00:00.000Z"
 *                                      end_at:
 *                                          type: string
 *                                          format: date-time
 *                                          description: End date and time for the action
 *                                          example: "2024-10-01T17:00:00.000Z"
 *                                      planned_eta:
 *                                          type: integer
 *                                          description: Estimated time of completion in weeks
 *                                          example: 4
 *                                      custom_planned_eta:
 *                                          type: integer
 *                                          description: Custom estimated time of completion
 *                                          example: 5
 *                                      actual_eta:
 *                                          type: integer
 *                                          description: Actual estimated time of completion
 *                                          example: 3
 *                                      reason_id:
 *                                          type: integer
 *                                          description: ID of the reason associated with the action
 *                                          example: 3
 *                                      priority_id:
 *                                          type: integer
 *                                          description: ID of the priority level of the action
 *                                          example: 2
 *                                      action_status:
 *                                          type: integer
 *                                          description: ID of the current status of the action
 *                                          example: 1
 *                                      status:
 *                                          type: boolean
 *                                          description: Indicates if the action is active
 *                                          example: true
 *          400:
 *              description: Bad request - Missing or invalid action ID
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "Action ID is required"
 *          404:
 *              description: Action not found
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "Action not found"
 *          500:
 *              description: Internal server error - Something went wrong with the server or database
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "Internal server error"
 */

router.put('/update/:id', updateActionController.update_action)

/**
 * @swagger
 * /action/delete/{id}:
 *   put:
 *     summary: Soft delete a action phase
 *     description: Soft deletes a action by setting its "deleted_at" field to the current date and time. The action remains in the database but is marked as deleted.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: uuid
 *         required: true
 *         description: The ID of the action to be soft deleted
 *         example: 1
 *     responses:
 *       200:
 *         description: Action successfully soft deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Action with ID 1 was successfully soft deleted."
 *       400:
 *         description: Action not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Action with ID 1 not found."
 *       500:
 *         description: Internal Server Error - An error occurred while attempting to delete the action
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "An error occurred while attempting to delete the action."
 *                 error:
 *                   type: string
 *                   example: "Database error message here"
 */

router.put('/delete/:id', deleteActionController.deleteAction)

/**
 * @swagger
 * /action/delete/user/{action_id}/{user_id}:
 *   put:
 *     summary: Soft delete a user from a specific action
 *     description: Soft deletes a user associated with a specific action by setting the "deleted_at" field for that user in the action.
 *     parameters:
 *       - in: path
 *         name: action_id
 *         schema:
 *           type: uuid
 *         required: true
 *         description: The ID of the action
 *         example: 1
 *       - in: path
 *         name: user_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the user to be soft deleted from the action
 *         example: 2
 *     responses:
 *       200:
 *         description: User successfully soft deleted from the action
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User with given ID was successfully soft deleted from phase 1."
 *       400:
 *         description: User or action not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User with given ID in action is not found."
 *       500:
 *         description: Internal Server Error - An error occurred while attempting to delete the action
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "An error occurred while attempting to delete the action."
 *                 error:
 *                   type: string
 *                   example: "Database error message here"
 */

router.put('/delete/user/:action_id/:user_id', deleteActionController.deleteActionUser)

module.exports = router