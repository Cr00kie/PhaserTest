export const SERVICE_KEYS = Object.freeze({
    PROGRESION_MANAGER: 'ProgManager',
    SOUND_MANAGER: 'SoundManager',
    // ...
});

export class ServiceLocator {
    constructor (){
        // Here we store the services used
        this.cachedServices = {};
    }

    /**
     * @param {SERVICE_KEYS} serviceKey Key of the service to register
     * @param {Object} service Service being registered
     */
    setService(serviceKey, service){
        // If the service existed it is replaced, if not a new property is made with the new serviceKey
        this.cachedServices[serviceKey] = service;
        return service;
    }

    /**
     * @param {SERVICE_KEYS} serviceKey Key of the service to register
     */
    getService(serviceKey){
        console.log("service [" + serviceKey + "]: " + this.cachedServices[serviceKey].name);
        // Returns the service with the key serviceKey. If not return undefined
        return this.cachedServices[serviceKey];
    }

    removeAllServices(){
        this.cachedServices = {};
    }
}