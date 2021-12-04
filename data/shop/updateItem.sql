UPDATE [dbo].[Shop]
SET 
      [itemName] = @itemName
      ,[description] = @description
      ,[cost] = @cost
      ,[maxLimit] = @maxLimit
      ,[imagePath] = @imagePath
      ,[timeUsed] = @timeUsed
      ,[tips] = @tips
      ,[effectsBy] = @effectsBy
WHERE [idItem]=@idItem
