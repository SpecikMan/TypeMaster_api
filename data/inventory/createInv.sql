INSERT INTO [dbo].[Inventory]
    (
      [idInventory],
      [idAccount],
      [idItem],
      [currentlyHave],
      [timeUsed]
    )
VALUES 
    (
        @idInventory,
        @idAccount,
        @idItem,
        @currentlyHave,
        @timeUsed
    )