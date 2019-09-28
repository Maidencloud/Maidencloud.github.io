
{
  StrCode = "mvy9n5ol@ry7wksv.myw"
  StrCodage = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890"
  IntLong=StrCode.length
  link=""
  for (i=0; i<StrCode.length; i++)
  {
    if (StrCodage.indexOf(StrCode.charAt(i))==-1)
    {
      StrLettre=StrCode.charAt(i)
      link+=(StrLettre)
    }
    else
    {
      StrLettre = (StrCodage.indexOf(StrCode.charAt(i))-IntLong+StrCodage.length) % StrCodage.length
      link+=(StrCodage.charAt(StrLettre))
    }
  }
  document.write("<a href='mailto:"+link+"'>Contacter Le Maître</a>")
}
