var charaChoice = "";

var levChoice = "";

var baseHP = 0;
var baseATK = 0;
var baseDEF = 0;

var folRarity = 0;
var podRarity = 0;
var soeRarity = 0;
var goeRarity = 0;
var colRarity = 0;

var soeMainStat = "";
var goeMainStat = "";
var colMainStat = "";


var hpFlatBonus = 0;
var hpPercentBonusSOE = 0;
var hpPercentBonusGOE = 0;
var hpPercentBonusCOL = 0;
var hpPercentBonusFinal = 0;

var atkFlatBonus = 0;
var atkPercentBonusSOE  = 0;
var atkPercentBonusGOE = 0;
var atkPercentBonusCOL  = 0;
var atkPercentBonusFinal  = 0;

var defFlatBonus = 0;
var defPercentBonusSOE  = 0;
var defPercentBonusGOE = 0;
var defPercentBonusCOL  = 0;
var defPercentBonusFinal  = 0;

var finalHP = 0;
var finalATK = 0;
var finalDEF = 0;

function characterChoice(){
    charaChoice = $("#character_select").val();
};

function levelChoice(){
    levChoice = $("#level_select").val();
    if (charaChoice == "Amber"){

        if (levChoice == 20){
            baseHP = 2038
            baseATK = 48
            baseDEF = 129
    
        } else if (levChoice == 40){
            baseHP = 3940
            baseATK = 93
            baseDEF = 250
    
        } else if (levChoice == 50){
            baseHP = 5016
            baseATK = 118
            baseDEF = 318
    
        } else if (levChoice == 60){
            baseHP = 6233
            baseATK = 147
            baseDEF = 396
    
        } else if (levChoice == 70){
            baseHP = 7309
            baseATK = 172
            baseDEF = 464
    
        } else if (levChoice == 80){
            baseHP = 8385
            baseATK = 198
            baseDEF = 532
    
        } else if (levChoice == 90){
            baseHP = 9461
            baseATK = 223
            baseDEF = 601
    
        }; //Amber Stats end
    
    } else if (charaChoice == "Barbara"){
        if (levChoice == 20){
            baseHP = 2108
            baseATK = 34
            baseDEF = 56
    
        } else if (levChoice == 40){
            baseHP = 4076
            baseATK = 66
            baseDEF = 279
    
        } else if (levChoice == 50){
            baseHP = 5189
            baseATK = 84
            baseDEF = 355
    
        } else if (levChoice == 60){
            baseHP = 6448
            baseATK = 105
            baseDEF = 441
    
        } else if (levChoice == 70){
            baseHP = 7561
            baseATK = 123
            baseDEF = 517
    
        } else if (levChoice == 80){
            baseHP = 8674
            baseATK = 141
            baseDEF = 593
    
        } else if (levChoice == 90){
            baseHP = 9787
            baseATK = 159
            baseDEF = 669
    
        }; // Barbara Stats end
    
    } else if (charaChoice == "Beidou"){
        if (levChoice == 20){
            baseHP = 2811
            baseATK = 48
            baseDEF = 140
    
        } else if (levChoice == 40){
            baseHP = 5435
            baseATK = 94
            baseDEF = 270
    
        } else if (levChoice == 50){
            baseHP = 6919
            baseATK = 119
            baseDEF = 344
    
        } else if (levChoice == 60){
            baseHP = 8597
            baseATK = 148
            baseDEF = 427
    
        } else if (levChoice == 70){
            baseHP = 10081
            baseATK = 174
            baseDEF = 501
    
        } else if (levChoice == 80){
            baseHP = 11565
            baseATK = 200
            baseDEF = 575
    
        } else if (levChoice == 90){
            baseHP = 13050
            baseATK = 225
            baseDEF = 648
    
        }; //Beidou stats end
    
    } else if (charaChoice == "Bennett"){
        if (levChoice == 20){
            baseHP = 2670
            baseATK = 41
            baseDEF = 166
    
        } else if (levChoice == 40){
            baseHP = 5163
            baseATK = 80
            baseDEF = 321
    
        } else if (levChoice == 50){
            baseHP = 6573
            baseATK = 101
            baseDEF = 409
    
        } else if (levChoice == 60){
            baseHP = 8168
            baseATK = 126
            baseDEF = 508
    
        } else if (levChoice == 70){
            baseHP = 9577
            baseATK = 148
            baseDEF = 596
    
        } else if (levChoice == 80){
            baseHP = 10987
            baseATK = 169
            baseDEF = 684
    
        } else if (levChoice == 90){
            baseHP = 12397
            baseATK = 191
            baseDEF = 771
    
        }; //Bennet stats end
    
         
    } else if (charaChoice == "Chongyun"){
        if (levChoice == 20){
            baseHP = 2366
            baseATK = 48
            baseDEF = 140
    
        } else if (levChoice == 40){
            baseHP = 4574
            baseATK = 93
            baseDEF = 270
    
        } else if (levChoice == 50){
            baseHP = 5824
            baseATK = 118
            baseDEF = 344
    
        } else if (levChoice == 60){
            baseHP = 7236
            baseATK = 147
            baseDEF = 427
    
        } else if (levChoice == 70){
            baseHP = 8485
            baseATK = 172
            baseDEF = 501
    
        } else if (levChoice == 80){
            baseHP = 9734
            baseATK = 198
            baseDEF = 575
    
        } else if (levChoice == 90){
            baseHP = 10984
            baseATK = 223
            baseDEF = 648
    
        }; //Chongyun stats end
    
    } else if (charaChoice == "Fischl"){
        if (levChoice == 20){
            baseHP = 1979
            baseATK = 53
            baseDEF = 128
    
        } else if (levChoice == 40){
            baseHP = 3827
            baseATK = 102
            baseDEF = 247
    
        } else if (levChoice == 50){
            baseHP = 4872
            baseATK = 130
            baseDEF = 315
    
        } else if (levChoice == 60){
            baseHP = 6054
            baseATK = 161
            baseDEF = 391
    
        } else if (levChoice == 70){
            baseHP = 7099
            baseATK = 189
            baseDEF = 459
    
        } else if (levChoice == 80){
            baseHP = 8144
            baseATK = 216
            baseDEF = 526
    
        } else if (levChoice == 90){
            baseHP = 9189
            baseATK = 244
            baseDEF = 594
    
        }; //Fischl stats end
    
    } else if (charaChoice == "Kaeya"){
        if (levChoice == 20){
            baseHP = 2506
            baseATK = 48
            baseDEF = 171
    
        } else if (levChoice == 40){
            baseHP = 4846
            baseATK = 93
            baseDEF = 330
    
        } else if (levChoice == 50){
            baseHP = 6170
            baseATK = 118
            baseDEF = 420
    
        } else if (levChoice == 60){
            baseHP = 7666
            baseATK = 147
            baseDEF = 522
    
        } else if (levChoice == 70){
            baseHP = 8989
            baseATK = 172
            baseDEF = 612
    
        } else if (levChoice == 80){
            baseHP = 10312
            baseATK = 198
            baseDEF = 702
    
        } else if (levChoice == 90){
            baseHP = 11636
            baseATK = 223
            baseDEF = 792
    
        }; //Kaeya stats end
    
    } else if (charaChoice == "Lisa"){
        if (levChoice == 20){
            baseHP = 2061
            baseATK = 50
            baseDEF = 123
    
        } else if (levChoice == 40){
            baseHP = 3985
            baseATK = 96
            baseDEF = 239
    
        } else if (levChoice == 50){
            baseHP = 5074
            baseATK = 123
            baseDEF = 304
    
        } else if (levChoice == 60){
            baseHP = 6305
            baseATK = 153
            baseDEF = 378
    
        } else if (levChoice == 70){
            baseHP = 7393
            baseATK = 179
            baseDEF = 443
    
        } else if (levChoice == 80){
            baseHP = 8481
            baseATK = 205
            baseDEF = 508
    
        } else if (levChoice == 90){
            baseHP = 9570
            baseATK = 232
            baseDEF = 573
    
        }; //Lisa stats end
    
    } else if (charaChoice == "Ningguang"){
        if (levChoice == 20){
            baseHP = 2108
            baseATK = 46
            baseDEF = 123
    
        } else if (levChoice == 40){
            baseHP = 4076
            baseATK = 88
            baseDEF = 239
    
        } else if (levChoice == 50){
            baseHP = 5189
            baseATK = 113
            baseDEF = 304
    
        } else if (levChoice == 60){
            baseHP = 5448
            baseATK = 140
            baseDEF = 378
    
        } else if (levChoice == 70){
            baseHP = 7561
            baseATK = 164
            baseDEF = 443
    
        } else if (levChoice == 80){
            baseHP = 8674
            baseATK = 188
            baseDEF = 508
    
        } else if (levChoice == 90){
            baseHP = 9787
            baseATK = 212
            baseDEF = 573
    
        }; //Ningguang stats end
    
    } else if (charaChoice == "Noelle"){
        if (levChoice == 20){
            baseHP = 2600
            baseATK = 41
            baseDEF = 172
    
        } else if (levChoice == 40){
            baseHP = 5027
            baseATK = 80
            baseDEF = 333
    
        } else if (levChoice == 50){
            baseHP = 6400
            baseATK = 101
            baseDEF = 423
    
        } else if (levChoice == 60){
            baseHP = 7953
            baseATK = 126
            baseDEF = 526
    
        } else if (levChoice == 70){
            baseHP = 9325
            baseATK = 148
            baseDEF = 617
    
        } else if (levChoice == 80){
            baseHP = 10698
            baseATK = 169
            baseDEF = 708
    
        } else if (levChoice == 90){
            baseHP = 12071
            baseATK = 191
            baseDEF = 799
    
        }; //Noelle stats end
    
    } else if (charaChoice == "Razor"){
        if (levChoice == 20){
            baseHP = 2577
            baseATK = 50
            baseDEF = 162
    
        } else if (levChoice == 40){
            baseHP = 4982
            baseATK = 97
            baseDEF = 313
    
        } else if (levChoice == 50){
            baseHP = 6343
            baseATK = 124
            baseDEF = 398
    
        } else if (levChoice == 60){
            baseHP = 7881
            baseATK = 154
            baseDEF = 495
    
        } else if (levChoice == 70){
            baseHP = 9241
            baseATK = 180
            baseDEF = 580
    
        } else if (levChoice == 80){
            baseHP = 10602
            baseATK = 207
            baseDEF = 665
    
        } else if (levChoice == 90){
            baseHP = 11962
            baseATK = 234
            baseDEF = 751
    
        }; //Razor stats end
    
    } else if (charaChoice == "Sucrose"){
        if (levChoice == 20){
            baseHP = 1991
            baseATK = 37
            baseDEF = 151
    
        } else if (levChoice == 40){
            baseHP = 3850
            baseATK = 71
            baseDEF = 293
    
        } else if (levChoice == 50){
            baseHP = 4901
            baseATK = 90
            baseDEF = 373
    
        } else if (levChoice == 60){
            baseHP = 6090
            baseATK = 112
            baseDEF = 463
    
        } else if (levChoice == 70){
            baseHP = 7141
            baseATK = 131
            baseDEF = 543
    
        } else if (levChoice == 80){
            baseHP = 8192
            baseATK = 151
            baseDEF = 623
    
        } else if (levChoice == 90){
            baseHP = 9244
            baseATK = 170
            baseDEF = 703
    
        }; //Sucrose stats end
    
    } else if (charaChoice == "Xiangling"){
        if (levChoice == 20){
            baseHP = 2342
            baseATK = 48
            baseDEF = 144
    
        } else if (levChoice == 40){
            baseHP = 4529
            baseATK = 94
            baseDEF = 279
    
        } else if (levChoice == 50){
            baseHP = 5766
            baseATK = 119
            baseDEF = 355
    
        } else if (levChoice == 60){
            baseHP = 7164
            baseATK = 148
            baseDEF = 441
    
        } else if (levChoice == 70){
            baseHP = 8401
            baseATK = 174
            baseDEF = 517
    
        } else if (levChoice == 80){
            baseHP = 9638
            baseATK = 200
            baseDEF = 593
    
        } else if (levChoice == 90){
            baseHP = 10875
            baseATK = 225
            baseDEF = 669
    
        }; //Xiangling stats end
    
    } else if (charaChoice == "Xingqiu"){
        if (levChoice == 20){
            baseHP = 2202
            baseATK = 43
            baseDEF = 163
    
        } else if (levChoice == 40){
            baseHP = 4257
            baseATK = 84
            baseDEF = 316
    
        } else if (levChoice == 50){
            baseHP = 5420
            baseATK = 107
            baseDEF = 402
    
        } else if (levChoice == 60){
            baseHP = 6735
            baseATK = 133
            baseDEF = 499
    
        } else if (levChoice == 70){
            baseHP = 7897
            baseATK = 156
            baseDEF = 585
    
        } else if (levChoice == 80){
            baseHP = 9060
            baseATK = 179
            baseDEF = 671
    
        } else if (levChoice == 90){
            baseHP = 10222
            baseATK = 202
            baseDEF = 758
    
        }; //Xingqiu stats end
    
    };
    $("#base_stats").text("ATK: "+ baseATK + ", DEF: " + baseDEF + ", HP: " + baseHP) //Display base stats
};




function folUpdate(){
    folRarity = $("#fol_rarity_select").val();
    if (folRarity == 4){
        hpFlatBonus = 3571

    } else if (folRarity == 5){
        hpFlatBonus = 4780
    };//End of FoL stats

}

function podUpdate(){
    podRarity = $("#pod_rarity_select").val();
    if (podRarity == 4){
        atkFlatBonus = 232
    } else if (podRarity == 5){
        atkFlatBonus = 311
    };//End of PoD stats
    
}

function soeUpdate(){
    soeRarity = $("#soe_rarity_select").val();
    soeMainStat = $("#soe_mainstat_select").val();
    console.log(soeRarity)
    console.log(soeMainStat)
    if (soeRarity == 4){
        if (soeMainStat == "HP"){
            hpPercentBonusSOE = 0.348

        } else if (soeMainStat == "DEF"){
            defPercentBonusSOE = 0.435

        } else if (soeMainStat == "ATK"){
            atkPercentBonusSOE = 0.348
        }
    } else if (soeRarity ==5){
        if (soeMainStat == "HP"){
            hpPercentBonusSOE = 0.466

        } else if (soeMainStat == "DEF"){
            defPercentBonusSOE = 0.583

        } else if (soeMainStat == "ATK"){
            atkPercentBonusSOE = 0.466
        }

    }; //End of SoE stats

}

function goeUpdate(){
    goeRarity = $("#goe_rarity_select").val();
    goeMainStat = $("#goe_mainstat_select").val();
    if (goeRarity == 4){
        if (goeMainStat == "HP"){
            hpPercentBonusGOE = 0.348

        } else if (goeMainStat == "DEF"){
            defPercentBonusGOE = 0.435

        } else if (goeMainStat == "ATK"){
            atkPercentBonusGOE = 0.348
        }
    } else if (goeRarity ==5){
        if (goeMainStat == "HP"){
            hpPercentBonusGOE = 0.466

        } else if (goeMainStat == "DEF"){
            defPercentBonusGOE = 0.583

        } else if (goeMainStat == "ATK"){
            atkPercentBonusGOE = 0.466
        }

    }; //End of GoE stats

}

function colUpdate(){
    colRarity = $("#col_rarity_select").val();
    colMainStat = $("#col_mainstat_select").val();
    if (colRarity == 4){
        if (colMainStat == "HP"){
            hpPercentBonusCOL = 0.348

        } else if (colMainStat == "DEF"){
            defPercentBonusCOL = 0.435

        } else if (colMainStat == "ATK"){
            atkPercentBonusCOL = 0.348
        }
    } else if (colRarity ==5){
        if (colMainStat == "HP"){
            hpPercentBonusCOL = 0.466

        } else if (colMainStat == "DEF"){
            defPercentBonusCOL = 0.583

        } else if (colMainStat == "ATK"){
            atkPercentBonusCOL = 0.466
        }

    }; //End of CoL stats

}

function finalModifiers(){
    hpPercentBonusFinal = hpPercentBonusSOE + hpPercentBonusGOE + hpPercentBonusCOL
    defPercentBonusFinal = defPercentBonusSOE + defPercentBonusGOE + defPercentBonusCOL
    atkPercentBonusFinal = atkPercentBonusSOE + atkPercentBonusGOE + atkPercentBonusCOL

    finalHP = baseHP * (1 + hpPercentBonusFinal) + hpFlatBonus
    finalDEF = baseDEF * (1 + defPercentBonusFinal) + defFlatBonus
    finalATK = baseATK * (1 + atkPercentBonusFinal) + atkFlatBonus

    $("#final_stats").text("ATK: "+ finalATK + ", DEF: " + finalDEF + ", HP: " + finalHP) //Display final stats



};

function folChoice(){
    hpFlatBonus = 0
    folUpdate()
    finalModifiers()
};

function podChoice(){
    atkFlatBonus = 0
    podUpdate()
    finalModifiers()
};

function soeChoice(){
    hpPercentBonusSOE = 0
    defPercentBonusSOE = 0
    atkPercentBonusSOE = 0
    soeUpdate()
    finalModifiers()
};

function goeChoice(){
    hpPercentBonusGOE = 0
    defPercentBonusGOE = 0
    atkPercentBonusGOE = 0
    goeUpdate()
    finalModifiers()
};

function colChoice(){
    hpPercentBonusCOL = 0
    defPercentBonusCOL = 0
    atkPercentBonusCOL = 0
    colUpdate()
    finalModifiers()
};

