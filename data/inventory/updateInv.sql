UPDATE [dbo].[Inventory]
SET 
    [idAccount] = @idAccount,
    [idItem] = @idItem,
    [currentlyHave] = @currentlyHave,
    [timeUsed] = @timeUsed
WHERE [idInventory]=@idInventory
