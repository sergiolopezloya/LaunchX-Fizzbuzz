const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("ExplorerController", () => {
    test("getExplorersByMission node", () => {
        const ExplorersWithMission = ExplorerController.getExplorersByMission("node");
        expect(ExplorersWithMission.length).toBe(10);
    });

    test("getExplorersUsernamesByMission node", () => {
        const UsernamesWithMission = ExplorerController.getExplorersUsernamesByMission("node");
        expect(UsernamesWithMission.length).toBe(10);
    });

    test("getExplorersAmonutByMission node", () => {
        const AmountExplorersWithMission = ExplorerController.getExplorersAmonutByMission("node");
        expect(AmountExplorersWithMission).toEqual(10);
    });
});