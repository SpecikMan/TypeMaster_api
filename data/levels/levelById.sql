select idLevel,nameLevel,numLike,
(SELECT FORMAT ([Level].[createDate], 'yyyy-MM-dd')) as [createDate],
(SELECT FORMAT ([Level].[updatedDate], 'yyyy-MM-dd')) as [updatedDate],levelContent,totalWords,time,Difficulty.idDifficulty,Difficulty.nameDifficulty,
Mode.idMode,Mode.nameMode,idPublisher,Account.username
from Account,Level,Mode,Difficulty
where Level.idMode = Mode.idMode and Level.idDifficulty = Difficulty.idDifficulty and Level.idPublisher = Account.idAccount and Level.idLevel = @idLevel