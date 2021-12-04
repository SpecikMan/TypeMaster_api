select Inventory.idAccount,Account.username,idInventory,Shop.idItem,Shop.itemName,Shop.description,Shop.cost,Shop.maxLimit,
Shop.imagePath,Shop.timeUsed as [ShopTimeUsed],Shop.tips,Shop.effectsBy,currentlyHave,Inventory.timeUsed as [InvTimeUsed]
from Inventory,Shop,Account 
where Inventory.idItem = Shop.idItem and Account.idAccount = Inventory.idAccount and Inventory.idInventory = @idInventory