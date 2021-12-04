UPDATE [dbo].[Level]
SET 
      [nameLevel] = @nameLevel
      ,[numLike] = @numLike
      ,[createDate] = @createDate
      ,[updatedDate] = @updatedDate
      ,[levelContent] = @levelContent
      ,[totalWords] = @totalWords
      ,[time] = @time
      ,[idDifficulty] = @idDifficulty
      ,[idMode] = @idMode
      ,[idPublisher] = @idPublisher
WHERE [idLevel]=@idLevel
