UPDATE [dbo].[Account]
SET 
    [username] = @username,
    [password] = @password,
    [email] = @email,
    [createDate] = @createDate,
    [latestLoginDate] = @latestLoginDate,
    [countLoginDate] = @countLoginDate,
    [pathImage] = @pathImage,
    [fullName] = @fullName,
    [dob] = @dob,
    [gender] = @gender,
    [coin] = @coin,
    [verificationCode] = @verificationCode,
    [uud] = @uud,
    [accountLevel] = @accountLevel,
    [levelCap] = @levelCap,
    [levelExp] = @levelExp,
    [idRole] = @idRole,
    [idRank] = @idRank
WHERE [idAccount]=@idAccount
