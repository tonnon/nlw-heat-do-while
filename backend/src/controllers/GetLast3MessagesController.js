"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Get3LastMessagesController = void 0;
const GetLast3MessagesService_1 = require("../services/GetLast3MessagesService");
class Get3LastMessagesController {
    async handle(request, response) {
        const service = new GetLast3MessagesService_1.GetLast3MessagesService();
        const result = await service.execute();
        return response.json(result);
    }
}
exports.Get3LastMessagesController = Get3LastMessagesController;
