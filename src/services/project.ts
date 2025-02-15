import { Service } from '../service';
import { AppwriteException, Client } from '../client';
import type { Models } from '../models';
import type { UploadProgress, Payload } from '../client';

export class Project extends Service {

     constructor(client: Client)
     {
        super(client);
     }

    /**
     * Get usage stats for a project
     *
     *
     * @param {string} range
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async getUsage(range?: string): Promise<Models.UsageProject> {
        let path = '/project/usage';
        let payload: Payload = {};

        if (typeof range !== 'undefined') {
            payload['range'] = range;
        }

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * List Variables
     *
     * Get a list of all project variables. These variables will be accessible in
     * all Appwrite Functions at runtime.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async listVariables(): Promise<Models.VariableList> {
        let path = '/project/variables';
        let payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create Variable
     *
     * Create a new project variable. This variable will be accessible in all
     * Appwrite Functions at runtime.
     *
     * @param {string} key
     * @param {string} value
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async createVariable(key: string, value: string): Promise<Models.Variable> {
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }

        let path = '/project/variables';
        let payload: Payload = {};

        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }

        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('post', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get Variable
     *
     * Get a project variable by its unique ID.
     *
     * @param {string} variableId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async getVariable(variableId: string): Promise<Models.Variable> {
        if (typeof variableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "variableId"');
        }

        let path = '/project/variables/{variableId}'.replace('{variableId}', variableId);
        let payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update Variable
     *
     * Update project variable by its unique ID. This variable will be accessible
     * in all Appwrite Functions at runtime.
     *
     * @param {string} variableId
     * @param {string} key
     * @param {string} value
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async updateVariable(variableId: string, key: string, value?: string): Promise<Models.Variable> {
        if (typeof variableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "variableId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        let path = '/project/variables/{variableId}'.replace('{variableId}', variableId);
        let payload: Payload = {};

        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }

        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('put', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Delete Variable
     *
     * Delete a project variable by its unique ID. 
     *
     * @param {string} variableId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async deleteVariable(variableId: string): Promise<{}> {
        if (typeof variableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "variableId"');
        }

        let path = '/project/variables/{variableId}'.replace('{variableId}', variableId);
        let payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + path);
        return await this.client.call('delete', uri, {
            'content-type': 'application/json',
        }, payload);
    }
};
