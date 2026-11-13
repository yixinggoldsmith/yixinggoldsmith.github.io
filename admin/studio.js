/* Yi Xing Studio: the website's own admin. */
(() => {
const LOGO_SVG = "<svg class=\"logo\" viewBox=\"112 421 807 231\" role=\"img\" aria-label=\"Yi Xing\"><path fill=\"#F4F0E6\" d=\"M199.6 651.8C199.3 651.7 198.9 651.3 198.6 651L198.1 650.4L198.1 617.7L198 585L198.5 583L199 581L199 568.8L199 556.6L198.5 555.4L198.1 554.1L182.1 530.1C173.3 516.9 165.8 505.6 165.5 505C165.2 504.4 162.7 500.6 160 496.5C157.3 492.4 154.8 488.6 154.5 488C153.8 486.6 143.7 471.5 142.5 470C141.3 468.5 139.2 465.4 138.5 464C138.2 463.4 132.4 454.5 125.5 444.3C112.1 424.2 112.2 424.4 112.2 423.3L112.2 422.5L112.9 421.8L113.5 421.1L148.7 421.1L183.9 421.1L184.6 421.6C185 421.8 185.6 422.6 186 423.2C186.9 424.7 189 428.2 190.3 430.2C190.8 431.1 191.6 432.4 191.9 433.1C192.3 433.8 193.2 435.1 193.8 436.2C194.5 437.2 195.5 438.9 196 440C196.5 441.1 197.5 442.8 198.2 443.8C198.8 444.9 199.7 446.3 200.2 447.1C200.6 447.9 201.4 449.1 201.8 449.9C202.3 450.7 203.2 452.1 203.8 453.1C204.5 454.2 205.2 455.5 205.5 456.1C205.8 456.6 206.5 457.7 207 458.5C207.5 459.3 208.6 461.3 209.5 463C210.4 464.7 211.5 466.7 212 467.5C212.5 468.3 213.2 469.4 213.5 469.9C213.8 470.5 214.5 471.8 215.2 472.8C215.8 473.9 216.7 475.2 217.1 475.9C217.4 476.6 218.2 477.9 218.7 478.8C219.3 479.6 220.3 481.3 221 482.5C221.7 483.7 222.7 485.4 223.3 486.2C223.8 487.1 224.6 488.4 224.9 489.1C225.3 489.8 226.1 491.1 226.8 492.1C227.4 493.1 228.5 494.9 229.1 496.2L230.3 498.5L231.2 499.2L232 500L233.1 500L234.2 500L235 499.2C235.4 498.8 236.1 497.9 236.4 497.2C236.8 496.5 237.5 495.3 238 494.5C238.5 493.7 239.2 492.6 239.5 492C239.8 491.4 240.5 490.3 241 489.5C241.5 488.7 242.4 487.2 243 486.1C243.5 485 244.5 483.2 245.2 482.2C245.8 481.1 246.7 479.8 247.1 479.1C247.4 478.4 248.2 477.1 248.7 476.2C249.3 475.4 250.3 473.7 251 472.5C251.7 471.3 252.7 469.6 253.3 468.8C253.8 467.9 254.6 466.6 254.9 465.9C255.3 465.2 256.2 463.9 256.8 462.8C257.5 461.8 258.7 459.6 259.5 457.9C260.4 456.3 261.9 453.6 263 452C264.1 450.4 265.4 448.1 266 447C266.6 445.8 267.5 444.3 268 443.5C268.5 442.7 269.2 441.6 269.5 441C269.8 440.4 270.5 439.3 271 438.5C271.5 437.7 272.6 435.7 273.5 434C274.4 432.3 275.5 430.3 276 429.5C276.5 428.7 277.5 427 278.2 425.6L279.5 423L280.4 422.3C280.9 421.9 281.7 421.4 282.2 421.3L283.2 421L317.3 421.1L351.4 421.1L352 421.6L352.6 422.1L352.4 423.3L352.3 424.5L347.2 432.2C344.4 436.5 341.8 440.4 341.5 441C341.2 441.6 336 449.5 330 458.5C324 467.5 318.8 475.4 318.5 476C318.2 476.6 313.9 483.1 309 490.5C304.1 497.9 299.8 504.5 299.4 505.2C299.1 505.8 298.3 507 297.7 507.8C296.3 509.5 292.2 515.5 291.4 517.1C291.1 517.8 290.2 519.1 289.5 520C288.8 520.9 287.9 522.2 287.6 522.8C287.2 523.5 282.9 530.1 277.9 537.6C273 545 268.8 551.5 268.5 552L268.1 552.9L268 601.7L267.9 650.5L267.2 651.2L266.5 651.9L233.3 651.9L200.1 652L199.6 651.8Z\"/><path fill=\"#F4F0E6\" d=\"M366.5 651.6L365.6 651.1L365.5 650.2L365.5 649.3L368.2 645.2C369.7 642.9 371.2 640.6 371.5 640C371.8 639.4 375.2 634.2 379 628.5C382.8 622.8 386.2 617.6 386.5 617C386.8 616.4 391.5 609.2 397 601C402.5 592.8 407.2 585.6 407.5 585C408.3 583.5 416.3 571.4 417.7 569.8C418.3 569 419.1 567.8 419.4 567.2C419.8 566.5 424.5 559.2 430 551C440 536 441.3 533.9 441.6 532.2L441.8 531.3L441.4 530.1L441 528.9L439.6 527.1C438.8 526.2 437.9 524.8 437.6 524.1C437.2 523.5 435.2 520.3 433 517C430.8 513.8 428.8 510.6 428.5 510C428.2 509.4 426.2 506.2 424 503C421.8 499.8 419.8 496.6 419.5 496C419.2 495.4 414.9 488.9 410 481.5C405.1 474.1 400.8 467.6 400.5 467C400.2 466.4 398.2 463.2 396 460C393.8 456.8 391.8 453.6 391.5 453C391.2 452.4 386.8 445.8 381.8 438.2L372.7 424.5L372.6 423.3L372.4 422.1L373 421.6L373.6 421.1L408.1 421.1L442.6 421L443.7 421.4L444.7 421.8L445.7 423.2C446.3 424 447.3 425.6 447.9 426.9C448.6 428.1 449.5 429.7 450 430.5C450.5 431.3 451.4 432.8 452 434C452.6 435.2 453.5 436.7 454 437.5C454.5 438.3 455.2 439.4 455.5 440C455.8 440.6 456.5 441.7 457 442.5C457.5 443.3 458.4 444.8 459 446C459.6 447.2 460.5 448.7 461 449.5C461.5 450.3 462.4 451.8 463 453C463.6 454.2 464.5 455.7 465 456.5C465.5 457.3 466.6 459.3 467.5 461C468.4 462.7 469.5 464.7 470 465.5C470.5 466.3 471.4 467.8 472 469C472.6 470.2 473.5 471.7 474 472.5C474.5 473.3 475.4 474.8 476 476C476.6 477.2 477.5 478.7 478 479.5C478.5 480.3 479.4 481.8 480 483C480.6 484.2 481.5 485.7 482 486.5C482.5 487.3 483.3 488.7 483.8 489.6C484.8 491.6 485.6 492.4 486.7 492.7L487.5 493L488.3 492.7C489.5 492.4 490.2 491.6 491.7 488.6C492.4 487.1 493.5 485.3 494 484.5C494.5 483.7 495.6 481.7 496.5 480C497.4 478.3 498.5 476.3 499 475.5C499.5 474.7 500.6 472.7 501.5 471C502.4 469.3 503.5 467.3 504 466.5C504.5 465.7 505.6 463.8 506.5 462.1C507.3 460.4 508.4 458.4 508.8 457.7C509.3 457 509.8 456 510 455.5C510.2 455 510.7 454 511.2 453.3C511.6 452.6 512.5 451.1 513 449.9C513.6 448.8 514.5 447.3 515 446.5C515.5 445.7 516.6 443.7 517.5 442C518.4 440.3 519.5 438.3 520 437.5C520.5 436.7 521.4 435.2 522 434C522.6 432.8 523.5 431.3 524 430.5C524.5 429.7 525.7 427.6 526.6 425.8L528.3 422.5L529 421.9L529.8 421.3L530.8 421.1C531.4 421 546.9 421 565.2 421.1L598.5 421.1L599.1 421.8L599.8 422.5L599.7 423.3L599.7 424.1L598.6 426.2C597.9 427.4 596.4 429.8 595.2 431.6C594 433.5 592.8 435.5 592.5 436C592.2 436.6 590.2 439.8 588 443C585.8 446.2 583.8 449.4 583.5 450C583.2 450.6 580.7 454.4 578 458.5C575.3 462.6 572.8 466.4 572.5 467C572.2 467.6 570.2 470.8 568 474C565.8 477.2 563.8 480.4 563.5 481C563.2 481.6 561.6 484.1 560 486.5C558.4 488.9 556.8 491.4 556.5 492C556.2 492.6 554.2 495.8 552 499C549.8 502.2 547.8 505.4 547.5 506C547.2 506.6 546.1 508.4 545 510C543.9 511.6 542.8 513.4 542.5 514C542.2 514.6 540.6 517.1 539 519.5C537.4 521.9 535.8 524.4 535.5 525C535.2 525.6 534.5 526.8 533.9 527.6C532.1 530.3 531.7 532.1 532.4 534.4L532.8 535.7L533.9 537.2C535.5 539.2 539.8 545.7 540.5 547C540.8 547.6 544.6 553.4 549 560C553.4 566.6 557.2 572.4 557.5 573C557.8 573.6 560.7 578.1 564 583C567.3 587.9 570.2 592.4 570.5 593C570.8 593.6 575.1 600.1 580 607.5C584.9 614.9 589.2 621.4 589.5 622C589.8 622.6 592.3 626.4 595 630.5C597.7 634.6 600.2 638.4 600.5 639C600.8 639.6 602.2 641.7 603.5 643.7C606.4 648.1 606.8 648.7 606.8 649.7L606.8 650.5L606.1 651.2L605.5 651.9L570.7 651.9C551.6 652 535.4 652 534.8 651.9L533.8 651.7L533 651.1L532.3 650.5L531.1 648.2C530.5 646.9 529.5 645.3 529 644.5C528.5 643.7 527.8 642.6 527.5 642.1C527.2 641.5 526 639.5 524.8 637.6C523.6 635.8 522.3 633.7 521.8 632.9C519.8 629.4 519.3 628.6 518.2 626.9C517.5 625.8 516.8 624.5 516.5 623.9C516.2 623.4 515.1 621.6 514 620C512.9 618.4 511.8 616.6 511.5 616.1C511.2 615.5 510 613.5 508.8 611.6C507.6 609.8 506.3 607.8 505.9 607.1C505.6 606.4 504.8 605.1 504.3 604.2C503.7 603.4 502.7 601.7 502 600.5C501.3 599.3 500.3 597.6 499.7 596.8C499.2 595.9 498.4 594.6 498.1 593.9C497.7 593.2 496.4 591.2 495.2 589.3C494 587.5 492.5 585.1 492 583.9C490.7 581.4 488.7 578.5 487.9 577.8L487.2 577.2L486.1 577.2C484.2 577.2 482.9 578.3 481.6 580.8C481.3 581.4 480.5 582.8 479.8 583.9C479.2 584.9 478.3 586.3 477.8 587C477.4 587.8 476.7 589 476.2 589.8C475.8 590.6 474.3 593 473 595C471.7 597 470.3 599.3 469.8 600.1C469.4 600.9 468.6 602.1 468.2 602.9C467.7 603.7 466.3 605.9 465 608C463.7 610 462.3 612.2 461.9 612.9C461.6 613.6 460.8 614.9 460.3 615.8C459.7 616.6 458.7 618.3 458 619.5C457.3 620.7 456.3 622.4 455.7 623.2C455.2 624.1 454.4 625.4 454.1 626.1C453.7 626.8 452.4 628.8 451.2 630.6C450 632.5 448.8 634.5 448.5 635.1C448.2 635.6 447.5 636.7 447 637.5C446.5 638.3 445.6 639.8 445 641C444.4 642.2 443.5 643.7 443 644.5C442.5 645.3 441.8 646.4 441.4 647.1C441.1 647.8 440.3 649 439.7 649.8L438.7 651.2L437.7 651.6L436.7 652L402.1 652L367.4 652L366.5 651.6Z\"/><path fill=\"#F4F0E6\" d=\"M662.6 651.8C661 651.1 661.1 653.4 661.1 622.9C661.1 593 661.1 594.5 662.5 593.6C663.1 593.2 664.8 593.1 687.6 593C709.8 592.9 712.3 592.8 713.5 592.4C714.7 592.1 716.3 592 726.5 592C737.2 592 738.3 592 740 591.5C741.4 591.1 742.7 591 745 591C747.3 591 748.6 590.9 750 590.5C751.4 590.1 752.7 590 755.5 590C758.3 590 759.6 589.9 761 589.5C762.4 589.1 763.7 589 766 589C768.3 589 769.6 588.9 771 588.5C772.1 588.2 773.7 588 775 588C776.3 588 777.9 587.8 779 587.5C780 587.2 781.3 587 781.9 587C783.9 587 801.5 582.7 804.6 581.4C810 579.2 811.7 578.4 813 577.6C813.8 577.2 814.9 576.6 815.4 576.3C816 576 817.9 574.5 819.5 573.1C821.1 571.6 822.8 570.1 823.3 569.7C824.3 568.9 826.3 566.4 828.7 562.9C831.1 559.4 833 553.1 833 548.5C833 546.7 833.2 545.3 833.5 544C833.9 542.6 834 541.3 834 538.5C834 535.7 834.1 534.4 834.5 533C834.8 532 835 530.6 835 530C835 529.4 834.8 528 834.5 527C833.9 524.7 833.9 523.3 834.4 521.5C834.7 520.4 834.9 518.6 835 512.8C835.1 505.5 835.1 505.5 835.8 504.8C836.9 503.7 916.1 503.7 917.2 504.8C918.1 505.8 918.4 518.5 917.5 522C917.1 523.8 917 524.7 917 531.5C917 538.3 916.9 539.3 916.5 541C916.1 542.4 916 543.7 916 546.5C916 549.3 915.9 550.6 915.5 552C915.2 553.1 915 554.7 915 556C915 557.3 914.8 558.9 914.5 560C914.2 561 914 562.5 914 563.4C914 564.2 913.6 566.7 913 569.1C911.9 574.1 911.1 577.7 910.9 579.2C910.7 580.8 907.3 590.6 906.1 593.4C903.3 599.4 901 604.1 900.1 605.4C899.5 606.2 898.8 607.4 898.5 608C896.8 611.4 893.3 616 888.5 621.3C883.3 626.9 882.9 627.3 880.1 629.4C879.2 630.1 877.7 631.2 876.9 631.9C865.6 640.5 852.2 646.3 836 649.5C834.6 649.8 832.4 650.2 831.1 650.5C829.7 650.8 827.9 651 826.4 651C824.7 651 823.3 651.2 822 651.5C820 652 663.9 652.3 662.6 651.8Z\"/><path fill=\"#FDA701\" d=\"M663.6 573.8C662.2 573.2 662.1 572.8 662 567.8C662 563.7 662 562.8 662.5 561.1C662.9 559.3 663 558.3 663 553C663 547.7 663.1 546.6 663.5 545C663.9 543.5 664 542.3 664 538.5C664 534.7 664.1 533.5 664.5 532C664.8 530.7 665 529.3 665 527.5C665 525.7 665.2 524.3 665.5 523C665.8 522 666 520.4 666 519.5C666 518.6 666.2 517 666.5 516C666.8 515 667 513.7 667 513.1C667 509.6 672.5 489 674.4 485.2C674.9 484.2 675.6 482.6 676 481.5C678 476.1 684.5 465.5 688.5 461C689.5 459.8 690.8 458.4 691.2 457.8C692.1 456.4 695.7 452.8 697 452C697.5 451.7 698.8 450.5 700 449.5C706.3 443.8 721.3 435.6 730 433C731.3 432.6 732.9 432.1 733.6 431.8C736.3 430.7 746.4 428 748 428C748.6 428 750 427.8 751 427.5C752 427.2 753.6 427 754.5 427C755.4 427 757 426.8 758 426.5C759.1 426.2 760.7 426 762 426C763.2 426 764.8 425.8 766 425.5C768.9 424.8 916.4 424.8 917.5 425.6C918.9 426.5 918.9 425 918.9 454.9C918.9 482.5 918.9 482.5 918.2 483.2C917.5 483.9 917.5 483.9 900.2 484C884.9 484.1 882.7 484.2 881.5 484.6C880.3 484.9 878.7 485 869 485C858.8 485 857.7 485 856 485.5C854.3 485.9 853.3 486 846 486C838.7 486 837.7 486.1 836 486.5C834.5 486.9 833.3 487 830 487C826.7 487 825.5 487.1 824 487.5C822.7 487.8 821.3 488 819.5 488C817.7 488 816.3 488.2 815 488.5C814 488.8 812.4 489 811.5 489C810.6 489 809 489.2 808 489.5C807 489.8 805.4 490 804.5 490C803.6 490 802 490.2 801 490.5C800 490.8 798.7 491 798.1 491C797.6 491 796.1 491.2 794.8 491.5C793.4 491.8 791.4 492.2 790.1 492.5C773.2 496.2 759.5 503.8 753.5 512.8C750.7 516.9 748 523.3 748 525.9C748 526.6 747.8 528 747.5 529C747.2 530.3 747 531.7 747 533.5C747 535.3 746.8 536.7 746.5 538C746.1 539.7 746 540.7 746 547.5C746 553.9 745.9 555.4 745.6 556.5C745.3 557.6 745.1 559.4 745 565.2C744.9 572.5 744.9 572.5 744.2 573.2C743.5 573.9 743.5 573.9 703.8 573.9C682 573.9 663.9 573.9 663.6 573.8Z\"/></svg>";
'use strict';
// ------------------------------------------------------------------ settings
const REPO = { owner: 'yixinggoldsmith', name: 'yixinggoldsmith.github.io', branch: 'main' };
const IS_LOCAL = /^(localhost|127\.0\.0\.1)$/.test(location.hostname);
const QS = new URLSearchParams(location.search);
const API = (IS_LOCAL && QS.get('api')) || 'https://api.github.com';            // a different API only for local testing
const SITE = (IS_LOCAL && QS.get('site')) || new URL('../', location.href).href;   // the public website
const RAW = `https://raw.githubusercontent.com/${REPO.owner}/${REPO.name}/${REPO.branch}/`;
const ACCESS_PATH = 'admin/access.json';
const KDF = { alg: 'argon2id', m: 65536, t: 3, p: 1 };
const MIN_PASSWORD = 12;
const TOKEN_URL = 'https://github.com/settings/personal-access-tokens/new?name=Yi+Xing+Studio'
  + '&description=' + encodeURIComponent('Lets Yi Xing Studio save campaigns, products and media to the website.')
  + '&expires_in=none&contents=write';
const BUILTIN_BROCHURES = [
  { id: 'christmas', title: 'Christmas 2026', sub: 'Five new charms in 916 gold', pages: 14, cover: 'media/v4/xmas-cover.webp' },
  { id: 'collection', title: 'The Collection 2026', sub: 'Thirteen designs in five collections', pages: 16, cover: 'media/v4/ed-flatlay.webp' },
  { id: 'gift', title: 'The Gift Edit', sub: 'Six designs to give, tied by hand', pages: 8, cover: 'media/v4/yixing-box.webp' },
  { id: 'library', title: 'The Bead Library', sub: 'Nineteen beads, pipes and links', pages: 8, cover: 'media/v4/ed-alphabet.webp' },
];
const KINDS = ['campaigns', 'products', 'collections', 'editorial', 'brochures'];

// ------------------------------------------------------------------ helpers
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const clone = v => (v === undefined ? undefined : JSON.parse(JSON.stringify(v)));
const enc = new TextEncoder();
const dec = new TextDecoder();
const sleep = ms => new Promise(r => setTimeout(r, ms));
const todayMY = () => { try { return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kuala_Lumpur' }).format(new Date()); } catch (e) { return new Date().toISOString().slice(0, 10); } };
const slugify = s => String(s || '').normalize('NFKD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60);
const plain = s => String(s || '').replace(/\*/g, '');
const stripHtml = h => String(h || '').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const basename = p => String(p || '').split('/').pop();
const isVideo = p => /\.(mp4|webm|mov)$/i.test(p || '');
const isImage = p => /\.(webp|jpe?g|png|gif|avif|svg)$/i.test(p || '');
const fmtDate = iso => { if (!iso) return ''; const d = new Date(String(iso).slice(0, 10) + 'T00:00:00'); return isNaN(d) ? String(iso) : d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }); };
const fmtSize = n => (n >= 1048576 ? (n / 1048576).toFixed(1) + ' MB' : Math.max(1, Math.round((n || 0) / 1024)) + ' KB');
const timeAgo = iso => {
  const s = (Date.now() - new Date(iso).getTime()) / 1000;
  if (s < 60) return 'just now';
  if (s < 3600) return Math.round(s / 60) + ' min ago';
  if (s < 86400) return Math.round(s / 3600) + ' h ago';
  if (s < 86400 * 7) return Math.round(s / 86400) + ' d ago';
  return fmtDate(new Date(iso).toISOString());
};
const b64 = {
  from(u8) { let s = ''; for (let i = 0; i < u8.length; i += 0x8000) s += String.fromCharCode.apply(null, u8.subarray(i, i + 0x8000)); return btoa(s); },
  to(str) { const s = atob(String(str).replace(/\s/g, '')); const u8 = new Uint8Array(s.length); for (let i = 0; i < s.length; i++) u8[i] = s.charCodeAt(i); return u8; },
};
const hex = buf => [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
const getAt = (obj, path) => (path === '' ? obj : String(path).split('.').reduce((a, k) => (a == null ? undefined : a[k]), obj));
const setAt = (obj, path, val) => {
  const ks = String(path).split('.'); let a = obj;
  for (let i = 0; i < ks.length - 1; i++) {
    const k = ks[i];
    if (a[k] == null || typeof a[k] !== 'object') a[k] = /^\d+$/.test(ks[i + 1]) ? [] : {};
    a = a[k];
  }
  a[ks[ks.length - 1]] = val;
};
const join = (...ps) => ps.filter(p => p !== '' && p != null).join('.');
const canon = v => JSON.stringify(v, (k, x) => (x && typeof x === 'object' && !Array.isArray(x) ? Object.keys(x).sort().reduce((o, key) => ((o[key] = x[key]), o), {}) : x));
const jsonFile = v => JSON.stringify(v, null, 2) + '\n';
const encodePath = p => String(p).split('/').map(encodeURIComponent).join('/');
const initials = name => String(name || '?').trim().split(/\s+/).slice(0, 2).map(w => w[0] || '').join('').toUpperCase() || '?';
async function gitBlobSha(bytes) {
  const head = enc.encode(`blob ${bytes.length}\0`);
  const all = new Uint8Array(head.length + bytes.length); all.set(head); all.set(bytes, head.length);
  return hex(await crypto.subtle.digest('SHA-1', all));
}
async function pool(items, n, fn) {
  const out = new Array(items.length); let i = 0;
  await Promise.all(Array.from({ length: Math.min(n, items.length) }, async () => { while (i < items.length) { const k = i++; out[k] = await fn(items[k], k); } }));
  return out;
}
const rand = n => hex(crypto.getRandomValues(new Uint8Array(n))).slice(0, n * 2);
const greeting = () => { const h = Number(new Intl.DateTimeFormat('en-GB', { hour: 'numeric', hourCycle: 'h23', timeZone: 'Asia/Kuala_Lumpur' }).format(new Date())); return h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening'; };

// ------------------------------------------------------------------ state
const S = {
  session: null,          // { token, vault: Uint8Array, user: { id, email, name, role, mustChange } }
  access: null,           // admin/access.json
  head: null,             // latest commit we know of
  files: new Map(),       // path -> { sha, size }
  data: { campaigns: {}, products: {}, collections: {}, editorial: {}, brochures: {}, home: null },
  media: [],              // [{ path, size }]
  local: new Map(),       // path -> object URL, for files saved in this session (until the website shows them)
  pending: new Map(),     // path -> { blob, url, size, type }: uploads waiting for the next save
  draft: null,            // the entry open in an editor: { kind, key, isNew, value, loadedSha, errors }
  dirty: false,
  ui: {},                 // per-view UI state (filters, selection, open items)
};

// ------------------------------------------------------------------ keyring
// admin/access.json holds the website's GitHub access key, sealed so that only people with a Studio login can open it:
//   vault   = AES-GCM(vaultKey, { token })
//   users[] = { id: SHA-256 of the email, kdf, key: AES-GCM(Argon2id(password), vaultKey), profile: AES-GCM(vaultKey, { email, name, role }) }
// Emails are never stored in the clear; a wrong password simply fails to open the key.
const Keyring = {
  async idFor(email) {
    return hex(await crypto.subtle.digest('SHA-256', enc.encode('yixing-studio:' + String(email).trim().toLowerCase())));
  },
  async derive(password, salt, kdf) {
    if (!window.hashwasm || !hashwasm.argon2id) throw new Error('The sign-in module did not load. Refresh the page and try again.');
    const raw = await hashwasm.argon2id({ password, salt, parallelism: kdf.p, iterations: kdf.t, memorySize: kdf.m, hashLength: 32, outputType: 'binary' });
    return crypto.subtle.importKey('raw', raw, 'AES-GCM', false, ['encrypt', 'decrypt']);
  },
  aes(raw) { return crypto.subtle.importKey('raw', raw, 'AES-GCM', false, ['encrypt', 'decrypt']); },
  async seal(key, bytes) {
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const data = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, bytes));
    return { iv: b64.from(iv), data: b64.from(data) };
  },
  async open(key, box) {
    return new Uint8Array(await crypto.subtle.decrypt({ name: 'AES-GCM', iv: b64.to(box.iv) }, key, b64.to(box.data)));
  },
  async sealJSON(raw, obj) { return this.seal(await this.aes(raw), enc.encode(JSON.stringify(obj))); },
  async openJSON(raw, box) { return JSON.parse(dec.decode(await this.open(await this.aes(raw), box))); },
  async makeUser(vault, profile, password) {
    const salt = crypto.getRandomValues(new Uint8Array(16));
    const key = await this.derive(password, salt, KDF);
    const clean = { email: String(profile.email).trim().toLowerCase(), name: String(profile.name || '').trim(), role: profile.role || 'editor', mustChange: !!profile.mustChange, added: profile.added || new Date().toISOString() };
    return {
      id: await this.idFor(clean.email),
      kdf: { ...KDF, salt: b64.from(salt) },
      key: await this.seal(key, vault),
      profile: await this.sealJSON(vault, clean),
    };
  },
  async unlock(access, email, password) {
    const bad = new Error('That email and password don’t match a Studio login.');
    const id = await this.idFor(email);
    const user = (access.users || []).find(u => u.id === id);
    if (!user) { await this.derive(password, new Uint8Array(16), KDF).catch(() => {}); throw bad; }   // same wait either way
    const key = await this.derive(password, b64.to(user.kdf.salt), user.kdf);
    let vault;
    try { vault = await this.open(key, user.key); } catch (e) { throw bad; }
    const secret = await this.openJSON(vault, access.vault);
    const profile = await this.openJSON(vault, user.profile);
    return { token: secret.token, vault, user: { id, ...profile } };
  },
  async profiles(access, vault) {
    return Promise.all((access.users || []).map(async u => ({ id: u.id, ...(await this.openJSON(vault, u.profile)) })));
  },
  async newAccess(token, profile, password) {
    const vault = crypto.getRandomValues(new Uint8Array(32));
    return {
      vault,
      access: {
        format: 'yixing-studio-access/1',
        note: 'Sign-in data for Yi Xing Studio. Everything here is encrypted; it opens only with a Studio password.',
        repo: `${REPO.owner}/${REPO.name}`,
        vault: await this.sealJSON(vault, { token, saved: new Date().toISOString() }),
        users: [await this.makeUser(vault, { ...profile, role: 'owner' }, password)],
        updated: new Date().toISOString(),
      },
    };
  },
};

function passwordScore(pw, email) {
  if (!pw) return 0;
  let s = 0;
  if (pw.length >= MIN_PASSWORD) s++;
  if (pw.length >= 16) s++;
  if (/[a-z]/.test(pw) && /[A-Z]/.test(pw)) s++;
  if (/\d/.test(pw) && /[^A-Za-z0-9]/.test(pw)) s++;
  if (pw.length < MIN_PASSWORD) s = Math.min(s, 1);
  const local = String(email || '').split('@')[0].toLowerCase();
  if (local.length > 2 && pw.toLowerCase().includes(local)) s = Math.min(s, 1);
  if (/^(.)\1+$/.test(pw) || /^(password|yixing|123456|qwerty)/i.test(pw)) s = 1;
  return Math.max(1, Math.min(4, s));
}
function passwordProblem(pw, email) {
  if (!pw || pw.length < MIN_PASSWORD) return `Use at least ${MIN_PASSWORD} characters.`;
  if (passwordScore(pw, email) < 2) return 'That password is too easy to guess. Try a short sentence or mix in numbers and symbols.';
  return '';
}
function strongPassword() {
  const words = ['amber', 'bead', 'pipe', 'teal', 'gold', 'lune', 'pave', 'eclat', 'olive', 'etoile', 'colonne', 'grain', 'ligne', 'spirale', 'fuseau', 'octave',
    'maille', 'anneau', 'ribbon', 'satin', 'clasp', 'charm', 'facet', 'polish', 'flute', 'twist', 'spacer', 'link', 'chain', 'bangle', 'pendant', 'garnet',
    'jade', 'pearl', 'coral', 'ivory', 'cedar', 'lotus', 'orchid', 'mango', 'durian', 'pandan', 'kopi', 'teh', 'rain', 'monsoon', 'harbour', 'island',
    'lantern', 'dragon', 'phoenix', 'peony', 'plum', 'bamboo', 'crane', 'koi', 'tiger', 'rabbit', 'horse', 'goat', 'rooster', 'ox', 'snake', 'sunrise'];
  const r = crypto.getRandomValues(new Uint32Array(5));
  const w = i => words[r[i] % words.length];
  return `${w(0)}-${w(1)}-${w(2)}-${w(3)}-${10 + (r[4] % 90)}`;
}

// ------------------------------------------------------------------ GitHub
// Everything is saved straight into the website's repository. One save = one commit; GitHub Pages republishes in about a minute.
class GHError extends Error {}
const GH = {
  token: null,
  repo(p = '') { return `/repos/${REPO.owner}/${REPO.name}${p}`; },
  async req(path, { method = 'GET', body, auth = true } = {}) {
    const headers = { Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' };
    if (auth && this.token) headers.Authorization = 'Bearer ' + this.token;
    if (body !== undefined) headers['Content-Type'] = 'application/json';
    let res;
    try { res = await fetch(API + path, { method, headers, body: body === undefined ? undefined : JSON.stringify(body), cache: 'no-store' }); }
    catch (e) { const err = new GHError('Could not reach GitHub. Check the internet connection and try again.'); err.code = 'network'; throw err; }
    if (res.status === 204) return null;
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      const err = new GHError(data.message || `GitHub replied ${res.status}`);
      err.status = res.status; err.data = data;
      if (res.status === 401) { err.code = 'auth'; err.message = 'The website’s GitHub access key no longer works (it may have expired or been deleted).'; }
      else if (res.status === 403 && /rate limit/i.test(data.message || '')) { err.code = 'rate'; err.message = 'GitHub is busy. Wait a minute and try again.'; }
      else if (res.status === 403 || (res.status === 404 && auth && this.token)) { err.code = 'perm'; }
      throw err;
    }
    return data;
  },
  async head() { return (await this.req(this.repo(`/git/ref/heads/${REPO.branch}`))).object.sha; },
  async tree(commitSha) { const c = await this.req(this.repo(`/git/commits/${commitSha}`)); return this.req(this.repo(`/git/trees/${c.tree.sha}?recursive=1`)); },
  async blob(sha) { const b = await this.req(this.repo(`/git/blobs/${sha}`)); return b64.to(b.content || ''); },
  async file(path, { auth = true } = {}) {
    try {
      const r = await this.req(this.repo(`/contents/${encodePath(path)}?ref=${REPO.branch}`), { auth });
      return { sha: r.sha, bytes: r.content ? b64.to(r.content) : null };
    } catch (e) { if (e.status === 404) return null; throw e; }
  },
  async commits(n = 8) { return this.req(this.repo(`/commits?sha=${REPO.branch}&per_page=${n}`)); },
  // changes: [{ path, data: string | Uint8Array }] to write, [{ path, data: null }] to delete
  async commit(changes, message, onProgress) {
    const writes = changes.filter(c => c.data != null), deletes = changes.filter(c => c.data == null).map(c => c.path);
    const total = writes.length + 1; let done = 0;
    const tick = () => onProgress && onProgress(++done / total);
    const blobs = await pool(writes, 3, async c => {
      const bytes = typeof c.data === 'string' ? enc.encode(c.data) : c.data;
      const r = await this.req(this.repo('/git/blobs'), { method: 'POST', body: { content: b64.from(bytes), encoding: 'base64' } });
      tick();
      return { path: c.path, sha: r.sha, bytes };
    });
    for (let attempt = 0; ; attempt++) {
      const head = await this.head();
      const base = await this.req(this.repo(`/git/commits/${head}`));
      const entries = blobs.map(b => ({ path: b.path, mode: '100644', type: 'blob', sha: b.sha }));
      // only delete what exists in the tree we build on
      const existing = deletes.length ? new Set((await this.req(this.repo(`/git/trees/${base.tree.sha}?recursive=1`))).tree.map(e => e.path)) : new Set();
      deletes.filter(p => existing.has(p)).forEach(p => entries.push({ path: p, mode: '100644', type: 'blob', sha: null }));
      if (!entries.length) return head;
      const tree = await this.req(this.repo('/git/trees'), { method: 'POST', body: { base_tree: base.tree.sha, tree: entries } });
      const commit = await this.req(this.repo('/git/commits'), { method: 'POST', body: { message, tree: tree.sha, parents: [head] } });
      try {
        await this.req(this.repo(`/git/refs/heads/${REPO.branch}`), { method: 'PATCH', body: { sha: commit.sha } });
        tick();
        S.head = commit.sha;
        for (const b of blobs) S.files.set(b.path, { sha: b.sha, size: b.bytes.length });
        for (const p of deletes) S.files.delete(p);
        return commit.sha;
      } catch (e) {
        if ((e.status === 422 || e.status === 409) && attempt < 3) { await sleep(600 * (attempt + 1)); continue; }   // someone saved at the same moment
        throw e;
      }
    }
  },
};

// ------------------------------------------------------------------ content
const KIND_DIR = { campaigns: '_data/campaigns', products: '_data/products', collections: '_data/collections', editorial: '_data/editorial', brochures: '_data/brochures' };
const KEY_FIELD = { campaigns: 'slug', products: 'id', collections: 'id', editorial: 'slug', brochures: 'slug' };
const pathFor = (kind, key) => (kind === 'home' ? '_data/home.json' : `${KIND_DIR[kind]}/${key}.json`);
const entries = kind => Object.entries(S.data[kind] || {}).map(([key, e]) => ({ key, ...e }));
const values = kind => entries(kind).map(e => e.value);
const byOrder = (a, b) => (Number(a.order ?? 999) - Number(b.order ?? 999)) || String(a.name || a.title || '').localeCompare(String(b.name || b.title || ''));

async function loadAll(onStep) {
  onStep && onStep('Opening the website’s files…');
  const head = await GH.head();
  const tree = await GH.tree(head);
  S.head = head;
  S.files = new Map(tree.tree.filter(e => e.type === 'blob').map(e => [e.path, { sha: e.sha, size: e.size || 0 }]));
  const dataPaths = [...S.files.keys()].filter(p => /^_data\/([a-z]+\/)?[^/]+\.json$/.test(p));
  const data = { campaigns: {}, products: {}, collections: {}, editorial: {}, brochures: {}, home: null };
  let n = 0;
  await pool(dataPaths, 8, async p => {
    const sha = S.files.get(p).sha;
    let value;
    try { value = JSON.parse(dec.decode(await GH.blob(sha))); } catch (e) { console.warn('Could not read', p, e); return; }
    onStep && onStep(`Loading content ${++n} of ${dataPaths.length}…`);
    if (p === '_data/home.json') { data.home = { path: p, sha, value }; return; }
    const m = /^_data\/([a-z]+)\/([^/]+)\.json$/.exec(p);
    if (m && data[m[1]]) data[m[1]][m[2]] = { path: p, sha, value };
  });
  if (!data.home) data.home = { path: '_data/home.json', sha: null, value: {} };
  S.data = data;
  refreshMedia();
}
function refreshMedia() {
  S.media = [...S.files.entries()].filter(([p]) => /^media\//.test(p) && (isImage(p) || isVideo(p))).map(([p, f]) => ({ path: p, size: f.size }))
    .sort((a, b) => (b.path.startsWith('media/uploads/') - a.path.startsWith('media/uploads/')) || a.path.localeCompare(b.path));
}

// URL for showing a file: uploads not yet saved, then files saved this session, then the website (raw GitHub if the site has not caught up)
function mediaUrl(p) {
  if (!p) return '';
  if (/^(https?:|data:|blob:)/.test(p)) return p;
  if (S.pending.has(p)) return S.pending.get(p).url;
  if (S.local.has(p)) return S.local.get(p);
  return SITE + encodePath(p);
}
const rawUrl = p => RAW + encodePath(p);
const imgTag = (p, alt = '', extra = '') => (p ? `<img src="${esc(mediaUrl(p))}" alt="${esc(alt)}" loading="lazy" decoding="async" ${extra} onerror="if(!this.dataset.raw){this.dataset.raw=1;this.src='${esc(rawUrl(p))}'}">` : '');

// every string in the website's content that mentions a file
function usesOf(path) {
  const hits = [];
  for (const kind of KINDS) for (const e of entries(kind)) if (JSON.stringify(e.value).includes(`"${path}"`)) hits.push({ kind, key: e.key, label: titleOf(kind, e.value) });
  if (S.data.home && JSON.stringify(S.data.home.value).includes(`"${path}"`)) hits.push({ kind: 'home', key: '', label: 'Home page' });
  return hits;
}
function titleOf(kind, v) {
  if (!v) return '';
  if (kind === 'products') return `${v.name || v.id} (${v.id})`;
  if (kind === 'collections') return v.name || v.id;
  if (kind === 'editorial') return plain(v.title) || v.slug;
  return plain(v.title) || v.slug || '';
}

// ------------------------------------------------------------------ publishing status
// After a save, check the public website until it shows the change (GitHub Pages rebuilds in about a minute).
const Publish = {
  jobs: [], state: 'idle', timer: null,
  watch(job) { this.jobs.push({ ...job, started: Date.now() }); this.set('busy'); this.loop(); },
  set(state, text) { this.state = state; this.text = text; renderPub(); },
  async siteData() {
    const res = await fetch(SITE + '?studio=' + Date.now(), { cache: 'no-store' });
    const html = await res.text();
    const m = /<script type="application\/json" id="site-data">([\s\S]*?)<\/script>/.exec(html);
    return m ? JSON.parse(m[1]) : null;
  },
  async loop() {
    if (this.timer) return;
    const tick = async () => {
      this.timer = null;
      if (!this.jobs.length) return;
      let site = null;
      try { site = await this.siteData(); } catch (e) { /* offline or not built yet */ }
      const still = [];
      for (const j of this.jobs) {
        let ok = false;
        try { ok = await j.test(site); } catch (e) { ok = false; }
        if (!ok && Date.now() - j.started < 5 * 60 * 1000) still.push(j);
        else if (!ok) this.set('err', 'Taking longer than usual');
      }
      this.jobs = still;
      if (!still.length) { if (this.state === 'busy') { this.set('ok', 'Live on the website'); setTimeout(() => { if (this.state === 'ok') this.set('idle'); }, 12000); } return; }
      this.timer = setTimeout(tick, 9000);
    };
    this.timer = setTimeout(tick, 15000);
  },
};
// does the published website have this entry exactly as saved (or gone, after a delete)?
function siteHas(kind, key, value) {
  return site => {
    if (!site) return false;
    if (kind === 'home') return canon(site.home || {}) === canon(value);
    const group = site[kind] || {};
    const keyField = KEY_FIELD[kind];
    const found = Object.values(group).find(v => v && String(v[keyField]) === String(key));
    if (value == null) return !found;
    return !!found && canon(found) === canon(value);
  };
}
function siteHasFile(path) {
  return async () => { const r = await fetch(SITE + encodePath(path) + '?studio=' + Date.now(), { method: 'HEAD', cache: 'no-store' }); return r.ok; };
}

// ------------------------------------------------------------------ small UI kit
const ic = (id, cls = '') => `<svg class="icon ${cls}" aria-hidden="true"><use href="#i-${id}"/></svg>`;
const app = () => $('#app');

function toast(text, type = 'ok', ms = 4200) {
  const box = $('#toasts');
  const el = document.createElement('div');
  el.className = `toast toast--${type}`;
  el.setAttribute('role', type === 'error' ? 'alert' : 'status');
  el.innerHTML = `${type === 'error' ? ic('alert') : ic('check')}<p>${esc(text)}</p><button type="button" aria-label="Close">${ic('x')}</button>`;
  el.querySelector('button').onclick = () => el.remove();
  box.appendChild(el);
  while (box.children.length > 3) box.firstElementChild.remove();
  if (ms) setTimeout(() => el.remove(), type === 'error' ? Math.max(ms, 8000) : ms);
}

// modal dialogs: ask() returns true/false; form() resolves with the form's values or null
let modalCount = 0;
function modal({ title, body, actions = [], wide = false, onOpen }) {
  return new Promise(resolve => {
    const wrap = document.createElement('div');
    wrap.className = 'modal-wrap';
    const id = 'm' + (++modalCount);
    wrap.innerHTML = `<div class="modal ${wide ? 'modal--wide' : ''}" role="dialog" aria-modal="true" aria-labelledby="${id}">
      <div class="modal__head"><h2 class="modal__title" id="${id}">${esc(title)}</h2><button type="button" class="btn btn--ghost btn--icon" data-x aria-label="Close">${ic('x')}</button></div>
      <div class="modal__body">${body}</div>
      ${actions.length ? `<div class="modal__foot">${actions.map((a, i) => `<button type="button" class="btn ${a.primary ? 'btn--primary' : ''} ${a.danger ? 'btn--danger' : ''}" data-a="${i}">${esc(a.label)}</button>`).join('')}</div>` : ''}
    </div>`;
    const prev = document.activeElement;
    const close = v => { wrap.remove(); document.removeEventListener('keydown', onKey); if (prev && prev.focus) prev.focus(); resolve(v); };
    const onKey = e => { if (e.key === 'Escape') close(null); };
    wrap.addEventListener('click', e => {
      if (e.target === wrap || e.target.closest('[data-x]')) return close(null);
      const b = e.target.closest('[data-a]');
      if (b) { const a = actions[Number(b.dataset.a)]; Promise.resolve(a.value === undefined ? true : (typeof a.value === 'function' ? a.value(wrap) : a.value)).then(v => { if (v !== false || a.closeOnFalse) close(v); }); }
    });
    document.addEventListener('keydown', onKey);
    document.body.appendChild(wrap);
    const first = wrap.querySelector('.modal__body input, .modal__body select, .modal__body textarea, .modal__foot .btn--primary');
    if (first) first.focus();
    if (onOpen) onOpen(wrap, close);
  });
}
const ask = (title, text, ok = 'OK', { danger = false, cancel = 'Cancel' } = {}) =>
  modal({ title, body: `<p>${text}</p>`, actions: [{ label: cancel, value: false, closeOnFalse: true }, { label: ok, primary: !danger, danger, value: true }] }).then(v => v === true);
const tell = (title, text) => modal({ title, body: `<p>${text}</p>`, actions: [{ label: 'OK', primary: true, value: true }] });

function busy(btn, on, label) {
  if (!btn) return;
  if (on) { btn.dataset.label = btn.innerHTML; btn.disabled = true; btn.innerHTML = `<span class="spin"></span>${esc(label || 'Saving…')}`; }
  else { btn.disabled = false; if (btn.dataset.label) btn.innerHTML = btn.dataset.label; }
}

// ------------------------------------------------------------------ layout
const NAV = [
  { id: 'overview', label: 'Overview', icon: 'home' },
  { id: 'campaigns', label: 'Campaigns', icon: 'flag', count: () => entries('campaigns').length },
  { id: 'products', label: 'Products', icon: 'gem', count: () => entries('products').length },
  { id: 'collections', label: 'Collections', icon: 'grid', count: () => entries('collections').length },
  { id: 'brochures', label: 'e-Brochures', icon: 'book', count: () => entries('brochures').length + BUILTIN_BROCHURES.length },
  { id: 'editorial', label: 'Editorial', icon: 'pen', count: () => entries('editorial').length },
  { id: 'home', label: 'Home page', icon: 'layout' },
  { id: 'media', label: 'Media library', icon: 'image', count: () => S.media.filter(m => m.path.startsWith('media/uploads/')).length },
];
const NAV2 = [{ id: 'team', label: 'Team', icon: 'users', owner: true }, { id: 'settings', label: 'Settings', icon: 'settings' }];
const isOwner = () => S.session && S.session.user.role === 'owner';

function shell(view, crumbs, body) {
  const u = S.session.user;
  const nav = (list) => list.filter(n => !n.owner || isOwner()).map(n => `<a href="#${n.id}" ${view === n.id ? 'aria-current="page"' : ''}>${ic(n.icon)}<span>${n.label}</span>${n.count ? `<span class="count">${n.count()}</span>` : ''}</a>`).join('');
  app().innerHTML = `<div class="shell">
    <aside class="side" aria-label="Studio menu">
      <a class="side__brand" href="#overview"><span>${LOGO_SVG}<small>Studio</small></span></a>
      <nav class="nav" aria-label="Content">${nav(NAV)}<div class="nav__label">Admin</div>${nav(NAV2)}</nav>
      <div class="side__foot">
        <div class="who"><span class="who__avatar">${esc(initials(u.name || u.email))}</span><span class="who__text"><span class="who__name">${esc(u.name || 'Studio user')}</span><span class="who__mail">${esc(u.email)}</span></span></div>
        <div class="side__links"><a href="${esc(SITE)}" target="_blank" rel="noopener">${ic('external')}View website</a><button type="button" data-signout>${ic('logout')}Sign out</button></div>
      </div>
    </aside>
    <div class="main">
      <header class="top">
        <button type="button" class="btn btn--ghost btn--icon top__menu" data-menu aria-label="Open menu">${ic('menu')}</button>
        <div class="crumbs">${crumbs.map((c, i) => (i < crumbs.length - 1 ? `<a href="${c[1]}">${esc(c[0])}</a>${ic('chevron')}` : `<b>${esc(c[0])}</b>`)).join('')}</div>
        <div class="top__right"><span id="pub"></span><a class="btn btn--sm hide-sm" href="${esc(SITE)}" target="_blank" rel="noopener">${ic('external')}View website</a></div>
      </header>
      <main class="content" id="content">${body}</main>
    </div>
  </div>`;
  renderPub();
}
function renderPub() {
  const el = $('#pub'); if (!el) return;
  const p = Publish;
  if (p.state === 'busy') el.innerHTML = `<span class="pub pub--busy" title="GitHub Pages is updating the website"><span class="dot"></span>Publishing…</span>`;
  else if (p.state === 'ok') el.innerHTML = `<span class="pub pub--ok"><span class="dot"></span>${esc(p.text || 'Live')}</span>`;
  else if (p.state === 'err') el.innerHTML = `<span class="pub pub--err" title="Refresh the website in a minute"><span class="dot"></span>${esc(p.text || 'Check the website')}</span>`;
  else el.innerHTML = '';
}

// ------------------------------------------------------------------ router
const VIEWS = {};
let routeToken = 0;
function parseRoute() {
  const h = decodeURIComponent(location.hash.replace(/^#/, ''));
  const [view, ...rest] = h.split('/');
  return { view: view || 'overview', id: rest.join('/') };
}
async function route() {
  const my = ++routeToken;
  if (!S.session) return showSignIn();
  const r = parseRoute();
  const fn = VIEWS[r.view] || VIEWS.overview;
  S.draft = null; S.dirty = false;
  try { await fn(r.id, my); }
  catch (e) { console.error(e); handleError(e); }
  if (my === routeToken) window.scrollTo(0, 0);
}
window.addEventListener('hashchange', async e => {
  if (S.dirty) {
    const ok = await ask('Leave without saving?', 'You have changes on this page that are not saved yet.', 'Leave without saving', { danger: true, cancel: 'Stay' });
    if (!ok) { const i = e.oldURL.indexOf('#'); history.replaceState(null, '', i >= 0 ? e.oldURL.slice(i) : location.pathname + location.search); return; }
    S.dirty = false; clearPending();
  }
  route();
});
window.addEventListener('beforeunload', e => { if (S.dirty) { e.preventDefault(); e.returnValue = ''; } });
function go(hash) { if (location.hash === hash) route(); else location.hash = hash; }
function goNoGuard(hash) { S.dirty = false; go(hash); }

function handleError(e) {
  if (e && e.code === 'auth') {
    toast(e.message + ' The owner can renew it under Settings.', 'error', 12000);
    if (!isOwner()) { signOut(true); return; }
    return;
  }
  toast((e && e.message) || 'Something went wrong.', 'error');
}

document.addEventListener('click', e => {
  if (e.target.closest('[data-menu]')) { $('.shell')?.classList.add('nav-open'); if (!$('.scrim')) { const s = document.createElement('div'); s.className = 'scrim'; s.onclick = closeMenu; $('.shell').appendChild(s); } }
  if (e.target.closest('.side .nav a')) closeMenu();
  if (e.target.closest('[data-signout]')) confirmSignOut();
});
function closeMenu() { $('.shell')?.classList.remove('nav-open'); $('.scrim')?.remove(); }

// ------------------------------------------------------------------ form fields
// A field: { key, label, type, hint, required, half, placeholder, options, max: [w, h], ratio, folder, limit, fields, summary, addLabel, showIf }
const UI = () => S.ui;
function fieldsHTML(fields, base, obj) {
  return fields.filter(f => !f.showIf || f.showIf(obj || {})).map(f => fieldHTML(f, join(base, f.key), getAt(obj || {}, f.key))).join('');
}
function fieldHTML(f, path, v) {
  if (f.type === 'group') return fieldsHTML(f.fields, path, v || {});
  const err = S.draft && S.draft.errors && S.draft.errors[path];
  const id = 'f_' + path.replace(/[^a-z0-9]/gi, '_');
  const label = f.label ? `<label class="label" for="${id}"><span>${esc(f.label)}${f.required ? '<span class="req" aria-hidden="true">*</span>' : ''}</span>${f.aside ? `<span class="hint">${esc(f.aside)}</span>` : ''}</label>` : '';
  const hint = f.hint ? `<p class="hint" id="${id}_h">${esc(f.hint)}</p>` : '';
  const error = err ? `<p class="error" role="alert">${esc(err)}</p>` : '';
  const desc = f.hint ? `aria-describedby="${id}_h"` : '';
  const ph = f.placeholder ? `placeholder="${esc(f.placeholder)}"` : '';
  let control = '';
  switch (f.type) {
    case 'text': case 'slug': case 'ref':
      control = `<input class="input ${f.type !== 'text' ? 'input--mono' : ''}" id="${id}" type="text" data-bind="${path}" data-kind="text" value="${esc(v ?? '')}" ${ph} ${desc} ${f.required ? 'required' : ''} autocomplete="off" spellcheck="${f.type === 'text'}">`; break;
    case 'number':
      control = `<input class="input" id="${id}" type="number" inputmode="numeric" data-bind="${path}" data-kind="number" value="${esc(v ?? '')}" ${ph} ${desc}>`; break;
    case 'date':
      control = `<input class="input" id="${id}" type="date" data-bind="${path}" data-kind="text" value="${esc(v ?? '')}" ${desc}>`; break;
    case 'textarea':
      control = `<textarea class="textarea" id="${id}" data-bind="${path}" data-kind="text" rows="${f.rows || 3}" ${ph} ${desc}>${esc(v ?? '')}</textarea>`; break;
    case 'tags':
      control = `<textarea class="textarea" id="${id}" data-bind="${path}" data-kind="lines" rows="3" ${ph} ${desc}>${esc((Array.isArray(v) ? v : []).join('\n'))}</textarea>`; break;
    case 'toggle':
      return `<div class="field ${f.half ? 'field--half' : ''}" data-field="${path}"><label class="switch"><input type="checkbox" id="${id}" data-bind="${path}" data-kind="bool" ${v === true || v === 'true' ? 'checked' : ''} ${desc}><span class="switch__track"></span><span>${esc(f.label)}</span></label>${hint}${error}</div>`;
    case 'select': case 'icon': {
      const opts = optionList(f);
      control = `<select class="select" id="${id}" data-bind="${path}" data-kind="text" ${desc}>${f.required ? '' : `<option value="">${esc(f.empty || '—')}</option>`}${opts.map(([val, lab]) => `<option value="${esc(val)}" ${String(v ?? '') === String(val) ? 'selected' : ''}>${esc(lab)}</option>`).join('')}${v && !opts.some(o => String(o[0]) === String(v)) ? `<option value="${esc(v)}" selected>${esc(v)} (not found)</option>` : ''}</select>`;
      if (f.type === 'icon') control = `<div class="inline"><span class="btn btn--icon" aria-hidden="true" style="pointer-events:none"><svg class="icon icon--lg"><use href="#x-${esc(v || 'sparkle')}"/></svg></span>${control}</div>`;
      break;
    }
    case 'segmented': {
      const val = v ?? f.default ?? f.options[0][0];
      control = `<div class="seg" role="group" aria-label="${esc(f.label)}">${f.options.map(([val2, lab]) => `<button type="button" data-act="seg" data-path="${path}" data-value="${esc(val2)}" aria-pressed="${String(val) === String(val2)}">${esc(lab)}</button>`).join('')}</div>`;
      break;
    }
    case 'story': {
      const stories = values('editorial').slice().sort(byOrder);
      control = `<select class="select" id="${id}" data-bind="${path}" data-kind="text" ${desc}><option value="">No story</option>${stories.map(s => `<option value="${esc(s.slug)}" ${String(v) === String(s.slug) ? 'selected' : ''}>${esc(plain(s.title))}</option>`).join('')}</select>`; break;
    }
    case 'link': control = linkHTML(path, v, id); break;
    case 'richtext': control = rtHTML(path, v, id); break;
    case 'image': control = imageHTML(f, path, v); break;
    case 'video': control = videoHTML(f, path, v); break;
    case 'images': control = imagesHTML(f, path, v); break;
    case 'pages': control = pagesHTML(f, path, v); break;
    case 'products': control = productsHTML(f, path, v); break;
    case 'list': control = listHTML(f, path, v); break;
    case 'blocks': control = blocksHTML(f, path, v); break;
    default: control = `<p class="hint">Unknown field ${esc(f.type)}</p>`;
  }
  return `<div class="field ${f.half ? 'field--half' : ''} ${err ? 'has-error' : ''}" data-field="${path}">${label}${control}${hint}${error}</div>`;
}
function optionList(f) {
  const o = typeof f.options === 'function' ? f.options() : (f.options || []);
  return o.map(x => (Array.isArray(x) ? x : [x, x]));
}

// ---- links: pick a page of the website, or type an address
function linkGroups() {
  const brochures = [...values('brochures').filter(b => b.slug).map(b => [`#brochure-${b.slug}`, plain(b.title) || b.slug]), ...BUILTIN_BROCHURES.map(b => [`#brochure-${b.id}`, b.title])];
  return [
    ['Contact', [['whatsapp', 'WhatsApp chat'], ['#enquiry-appointment', 'Book an appointment'], ['#enquiry-general', 'Enquiry form'], ['#enquiry-design', 'Design your own'], ['#enquiry-tradein', 'Trade-in'], ['#enquiry-care', 'Care and restringing']]],
    ['Pages', [['#collection-all', 'All designs'], ['#editorial', 'Editorial'], ['#e-brochure', 'e-Brochures'], ['#about', 'About us'], ['#stores', 'Visit us'], ['#contact', 'Contact us'], ['#faq', 'Pricing and care']]],
    ['e-Brochures', brochures],
    ['Collections', values('collections').slice().sort(byOrder).map(c => [`#collection-${c.id}`, c.name || c.id])],
    ['Stories', values('editorial').slice().sort(byOrder).map(s => [`#story-${s.slug}`, plain(s.title)])],
    ['Products', values('products').slice().sort(byOrder).map(p => [`#product-${p.id}`, `${p.name} (${p.id})`])],
  ];
}
function linkHTML(path, v, id) {
  const val = String(v ?? '');
  const groups = linkGroups();
  const known = !val || groups.some(([, items]) => items.some(([x]) => x === val));
  const custom = !known || (S.ui.customLinks && S.ui.customLinks.has(path));
  return `<div class="linkpick">
    <select class="select" id="${id}" data-link="${path}">
      <option value="" ${!val && !custom ? 'selected' : ''}>No link</option>
      ${groups.filter(g => g[1].length).map(([g, items]) => `<optgroup label="${esc(g)}">${items.map(([x, l]) => `<option value="${esc(x)}" ${!custom && x === val ? 'selected' : ''}>${esc(l)}</option>`).join('')}</optgroup>`).join('')}
      <option value="__custom" ${custom ? 'selected' : ''}>Web address or other link…</option>
    </select>
    <input class="input input--mono" type="text" data-bind="${path}" data-kind="text" value="${esc(val)}" placeholder="https://… or #page" ${custom ? '' : 'hidden'} aria-label="Link address">
  </div>`;
}

// ---- rich text (bold, italic, links, lists)
function sanitizeHTML(html) {
  const tpl = document.createElement('template'); tpl.innerHTML = String(html || '');
  const ALLOW = { P: 'p', BR: 'br', B: 'b', STRONG: 'b', I: 'em', EM: 'em', A: 'a', UL: 'ul', OL: 'ol', LI: 'li', H3: 'h3' };
  const walk = node => {
    let out = '';
    node.childNodes.forEach(n => {
      if (n.nodeType === 3) { out += esc(n.nodeValue); return; }
      if (n.nodeType !== 1) return;
      const inner = walk(n);
      const tag = n.tagName === 'DIV' ? 'p' : ALLOW[n.tagName];
      if (!tag) { out += inner; return; }
      if (tag === 'br') { out += '<br>'; return; }
      if (tag === 'a') {
        const href = (n.getAttribute('href') || '').trim();
        if (!/^(https?:|mailto:|tel:|#|whatsapp$)/i.test(href)) { out += inner; return; }
        out += `<a href="${esc(href)}">${inner}</a>`; return;
      }
      if ((tag === 'p' || tag === 'li') && !inner.replace(/<br>/g, '').trim()) return;
      out += `<${tag}>${inner}</${tag}>`;
    });
    return out;
  };
  let out = walk(tpl.content).replace(/(<br>)+(<\/(p|li)>)/g, '$2');
  // loose text at the top level goes into a paragraph
  if (out && !/^<(p|ul|ol|h3)>/.test(out)) out = out.split(/(<(?:p|ul|ol|h3)>[\s\S]*?<\/(?:p|ul|ol|h3)>)/).map(part => (!part.trim() ? '' : /^<(p|ul|ol|h3)>/.test(part) ? part : `<p>${part}</p>`)).join('');
  return out;
}
function rtHTML(path, v, id) {
  return `<div class="rt"><div class="rt__bar" role="toolbar" aria-label="Text style">
      <button type="button" data-rt="bold" title="Bold"><b>B</b></button><button type="button" data-rt="italic" title="Italic"><i>I</i></button>
      <button type="button" data-rt="link" title="Link">${ic('link')}</button><button type="button" data-rt="insertUnorderedList" title="Bulleted list">${ic('list')}</button>
      <button type="button" data-rt="insertOrderedList" title="Numbered list">${ic('list-ol')}</button><button type="button" data-rt="removeFormat" title="Clear style">${ic('eraser')}</button>
    </div><div class="rt__area" id="${id}" contenteditable="true" role="textbox" aria-multiline="true" data-rt-area="${path}">${sanitizeHTML(v)}</div></div>`;
}

// ---- single image / video
function imageHTML(f, path, v) {
  const isNew = v && S.pending.has(v);
  return `<div class="upl" data-drop="${path}" data-mode="single" data-ftype="image">
    <div class="upl__preview" style="aspect-ratio:${f.ratio || '4/3'}">${v ? imgTag(v) : `<span>${ic('image', 'icon--lg')}</span>`}</div>
    <div class="upl__side">
      <div class="upl__actions">
        <label class="btn btn--sm filebtn">${ic('upload')}${v ? 'Replace' : 'Upload'}<input type="file" accept="image/*" data-upload="${path}" data-mode="single"></label>
        <button type="button" class="btn btn--sm" data-act="library" data-path="${path}" data-mode="single" data-ftype="image">${ic('image')}Library</button>
        ${v ? `<button type="button" class="btn btn--sm btn--ghost" data-act="clear" data-path="${path}">${ic('trash')}Remove</button>` : ''}
      </div>
      <p class="upl__file">${v ? (isNew ? `<span class="upl__new">${ic('dot')}New, saved with this page</span><br>` : '') + esc(basename(v)) : 'Drop an image here, or upload one.'}</p>
    </div></div>`;
}
function videoHTML(f, path, v) {
  const isNew = v && S.pending.has(v);
  return `<div class="upl" data-drop="${path}" data-mode="single" data-ftype="video">
    <div class="upl__preview" style="aspect-ratio:16/9">${v ? `<video src="${esc(mediaUrl(v))}" muted playsinline preload="metadata" controls onerror="if(!this.dataset.raw){this.dataset.raw=1;this.src='${esc(rawUrl(v))}'}"></video>` : `<span>${ic('video', 'icon--lg')}</span>`}</div>
    <div class="upl__side">
      <div class="upl__actions">
        <label class="btn btn--sm filebtn">${ic('upload')}${v ? 'Replace' : 'Upload video'}<input type="file" accept="video/mp4,video/webm" data-upload="${path}" data-mode="single"></label>
        <button type="button" class="btn btn--sm" data-act="library" data-path="${path}" data-mode="single" data-ftype="video">${ic('video')}Library</button>
        ${v ? `<button type="button" class="btn btn--sm btn--ghost" data-act="clear" data-path="${path}">${ic('trash')}Remove</button>` : ''}
      </div>
      <p class="upl__file">${v ? (isNew ? `<span class="upl__new">${ic('dot')}New, saved with this page</span><br>` : '') + esc(basename(v)) : 'MP4 or WebM, up to 50 MB (10 MB or less loads best).'}</p>
    </div></div>`;
}
// ---- several images (product photos)
function imagesHTML(f, path, v) {
  const arr = Array.isArray(v) ? v : [];
  const limit = f.limit || 12;
  return `<div class="thumbs" data-drop="${path}" data-mode="append" data-ftype="image">
    ${arr.map((p, i) => `<div class="thumb" draggable="true" data-thumb="${i}" data-list="${path}">
      <div class="thumb__img">${imgTag(p)}${i === 0 ? '<span class="thumb__tag">Cover</span>' : ''}${S.pending.has(p) ? '<span class="thumb__tag" style="left:auto;right:6px;background:var(--amber);color:#142021">New</span>' : ''}</div>
      <div class="thumb__bar">
        <button type="button" class="btn btn--ghost" data-act="move" data-path="${path}" data-i="${i}" data-d="-1" ${i === 0 ? 'disabled' : ''} aria-label="Move earlier">${ic('left')}</button>
        <button type="button" class="btn btn--ghost" data-act="remove" data-path="${path}" data-i="${i}" aria-label="Remove photo">${ic('trash')}</button>
        <button type="button" class="btn btn--ghost" data-act="move" data-path="${path}" data-i="${i}" data-d="1" ${i === arr.length - 1 ? 'disabled' : ''} aria-label="Move later">${ic('right')}</button>
      </div></div>`).join('')}
    ${arr.length < limit ? `<label class="drop">${ic('upload', 'icon--lg')}<span>Add photos<br><small class="muted">or drop them here</small></span><input type="file" accept="image/*" multiple data-upload="${path}" data-mode="append"></label>` : ''}
  </div>
  <div class="addrow"><button type="button" class="btn btn--sm" data-act="library" data-path="${path}" data-mode="append" data-ftype="image">${ic('image')}Add from library</button><span class="hint">${arr.length} of ${limit}. Drag photos, or use the arrows, to change the order.</span></div>`;
}
// ---- brochure pages
function pagesHTML(f, path, v) {
  const arr = Array.isArray(v) ? v : [];
  const prods = values('products').slice().sort(byOrder);
  return `<div class="pages" data-drop="${path}" data-mode="pages" data-ftype="image">
    ${arr.map((pg, i) => `<div class="page thumb" draggable="true" data-thumb="${i}" data-list="${path}">
      <div class="thumb__img">${imgTag(pg && pg.image)}<span class="thumb__tag">Page ${i + 1}</span></div>
      <input class="input" type="text" data-bind="${join(path, i, 'caption')}" data-kind="text" value="${esc((pg && pg.caption) || '')}" placeholder="Caption (optional)" aria-label="Caption for page ${i + 1}">
      <select class="select" data-bind="${join(path, i, 'product')}" data-kind="text" aria-label="Product on page ${i + 1}"><option value="">No product button</option>${prods.map(p => `<option value="${esc(p.id)}" ${pg && String(pg.product) === String(p.id) ? 'selected' : ''}>${esc(p.name)} (${esc(p.id)})</option>`).join('')}</select>
      <div class="thumb__bar">
        <button type="button" class="btn btn--ghost" data-act="move" data-path="${path}" data-i="${i}" data-d="-1" ${i === 0 ? 'disabled' : ''} aria-label="Move page earlier">${ic('left')}</button>
        <button type="button" class="btn btn--ghost" data-act="remove" data-path="${path}" data-i="${i}" aria-label="Remove page">${ic('trash')}</button>
        <button type="button" class="btn btn--ghost" data-act="move" data-path="${path}" data-i="${i}" data-d="1" ${i === arr.length - 1 ? 'disabled' : ''} aria-label="Move page later">${ic('right')}</button>
      </div></div>`).join('')}
    <label class="drop" style="aspect-ratio:auto;min-height:220px">${ic('upload', 'icon--lg')}<span>Add pages<br><small class="muted">Select several images at once; they are added in file-name order.</small></span><input type="file" accept="image/*" multiple data-upload="${path}" data-mode="pages"></label>
  </div>`;
}
// ---- products in order
function productsHTML(f, path, v) {
  const ids = Array.isArray(v) ? v : [];
  return `<div class="picks">${ids.map((pid, i) => {
      const p = S.data.products[pid] ? S.data.products[pid].value : values('products').find(x => String(x.id) === String(pid));
      return `<div class="pick ${p ? '' : 'pick--missing'}">${p && p.images && p.images[0] ? imgTag(p.images[0]) : '<span class="pick__ph"></span>'}
        <div class="pick__text"><div class="pick__name">${esc(p ? p.name : pid)}</div><div class="pick__meta">${p ? esc(p.id) + (p.show === false ? ' · hidden' : '') : 'This product no longer exists'}</div></div>
        <div class="pick__tools">
          <button type="button" class="btn btn--ghost" data-act="move" data-path="${path}" data-i="${i}" data-d="-1" ${i === 0 ? 'disabled' : ''} aria-label="Move up">${ic('up')}</button>
          <button type="button" class="btn btn--ghost" data-act="move" data-path="${path}" data-i="${i}" data-d="1" ${i === ids.length - 1 ? 'disabled' : ''} aria-label="Move down">${ic('down')}</button>
          <button type="button" class="btn btn--ghost" data-act="remove" data-path="${path}" data-i="${i}" aria-label="Remove">${ic('x')}</button>
        </div></div>`;
    }).join('')}</div>
    <div class="addrow"><button type="button" class="btn btn--sm" data-act="pick-products" data-path="${path}">${ic('plus')}Add products</button>${ids.length ? `<span class="hint">${ids.length} selected</span>` : ''}</div>`;
}
// ---- lists of small cards (announcements, tiles, buttons, services)
function itemHead(path, i, n, sum, typeLabel, listPath) {
  return `<div class="item__head" data-act="toggle-item" data-path="${path}">
    ${ic('chevron', 'chev')}<span class="item__num">${i + 1}</span>${typeLabel ? `<span class="item__type">${esc(typeLabel)}</span>` : ''}
    <span class="item__sum ${sum ? '' : 'is-empty'}" data-sum="${path}">${esc(sum || 'Empty, click to fill in')}</span>
    <span class="item__tools">
      <button type="button" class="btn btn--ghost" data-act="move" data-path="${listPath}" data-i="${i}" data-d="-1" ${i === 0 ? 'disabled' : ''} aria-label="Move up">${ic('up')}</button>
      <button type="button" class="btn btn--ghost" data-act="move" data-path="${listPath}" data-i="${i}" data-d="1" ${i === n - 1 ? 'disabled' : ''} aria-label="Move down">${ic('down')}</button>
      <button type="button" class="btn btn--ghost" data-act="remove" data-path="${listPath}" data-i="${i}" data-confirm="1" aria-label="Delete">${ic('trash')}</button>
    </span></div>`;
}
function listHTML(f, path, v) {
  const arr = Array.isArray(v) ? v : [];
  S.ui.sum = S.ui.sum || new Map(); S.ui.open = S.ui.open || new Set();
  return `<div class="items">${arr.map((item, i) => {
      const ip = join(path, i);
      S.ui.sum.set(ip, f.summary || (() => ''));
      return `<div class="item ${S.ui.open.has(ip) ? 'is-open' : ''}" data-item="${ip}">${itemHead(ip, i, arr.length, f.summary ? f.summary(item || {}) : '', '', path)}<div class="item__body">${fieldsHTML(f.fields, ip, item || {})}</div></div>`;
    }).join('')}</div>
    ${!f.max || arr.length < f.max ? `<div class="addrow"><button type="button" class="btn btn--sm" data-act="add" data-path="${path}">${ic('plus')}${esc(f.addLabel || 'Add')}</button>${f.max ? `<span class="hint">${arr.length} of ${f.max}</span>` : ''}</div>` : `<p class="hint">That’s the most you can have here (${f.max}).</p>`}`;
}
function blocksHTML(f, path, v) {
  const arr = Array.isArray(v) ? v : [];
  S.ui.sum = S.ui.sum || new Map(); S.ui.open = S.ui.open || new Set();
  return `<div class="items">${arr.map((b, i) => {
      const ip = join(path, i), def = f.blocks[b && b.type] || null;
      S.ui.sum.set(ip, def ? def.summary : () => '');
      return `<div class="item ${S.ui.open.has(ip) ? 'is-open' : ''}" data-item="${ip}">${itemHead(ip, i, arr.length, def ? def.summary(b || {}) : 'Unknown block', def ? def.label : (b && b.type) || 'Block', path)}
        <div class="item__body">${def ? fieldsHTML(def.fields, ip, b) : '<p class="hint">This block type isn’t editable here.</p>'}</div></div>`;
    }).join('')}</div>
    <div class="addrow"><span class="hint">Add a block:</span>${Object.entries(f.blocks).map(([t, d]) => `<button type="button" class="btn btn--sm" data-act="add-block" data-path="${path}" data-type="${t}">${ic('plus')}${esc(d.label)}</button>`).join('')}</div>`;
}

// ------------------------------------------------------------------ uploads
const MAX_UPLOAD = 50 * 1024 * 1024;
async function prepareImage(file, max = [2000, 2000]) {
  let bmp;
  try { bmp = await createImageBitmap(file, { imageOrientation: 'from-image' }); }
  catch (e) {
    try { bmp = await new Promise((res, rej) => { const im = new Image(); im.onload = () => res(im); im.onerror = rej; im.src = URL.createObjectURL(file); }); }
    catch (e2) { throw new Error(`“${file.name}” can’t be opened here. Save it as JPG or PNG and try again.`); }
  }
  const w0 = bmp.width || bmp.naturalWidth, h0 = bmp.height || bmp.naturalHeight;
  const scale = Math.min(1, max[0] / w0, max[1] / h0);
  const w = Math.max(1, Math.round(w0 * scale)), h = Math.max(1, Math.round(h0 * scale));
  const canvas = document.createElement('canvas'); canvas.width = w; canvas.height = h;
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(bmp, 0, 0, w, h);
  let blob = await new Promise(r => canvas.toBlob(r, 'image/webp', 0.86));
  if (!blob || blob.type !== 'image/webp') {          // browsers that can't write WebP: JPEG on white
    const c2 = document.createElement('canvas'); c2.width = w; c2.height = h;
    const x2 = c2.getContext('2d'); x2.fillStyle = '#fff'; x2.fillRect(0, 0, w, h); x2.drawImage(canvas, 0, 0);
    blob = await new Promise(r => c2.toBlob(r, 'image/jpeg', 0.88));
  }
  return { blob, w, h, ext: blob.type === 'image/webp' ? 'webp' : 'jpg' };
}
function newMediaPath(folder, name, ext) {
  const base = slugify(String(name).replace(/\.[^.]+$/, '')) || 'file';
  const d = todayMY().replace(/-/g, '').slice(2);
  return `media/uploads/${folder}/${base.slice(0, 40)}-${d}-${rand(2)}.${ext}`;
}
// turn chosen files into pending uploads; returns the new paths
async function addFiles(files, { folder = 'images', ftype = 'image', max } = {}) {
  const out = [];
  const list = [...files].sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
  for (const file of list) {
    if (ftype === 'video' || /^video\//.test(file.type)) {
      if (!/\.(mp4|webm)$/i.test(file.name) && !/^video\/(mp4|webm)$/.test(file.type)) { toast(`“${file.name}” isn’t an MP4 or WebM video.`, 'error'); continue; }
      if (file.size > MAX_UPLOAD) { toast(`“${file.name}” is ${fmtSize(file.size)}. Videos must be under 50 MB; compress it and try again.`, 'error'); continue; }
      if (file.size > 15 * 1024 * 1024) toast(`“${file.name}” is ${fmtSize(file.size)}. It will work, but under 10 MB loads faster for visitors.`, 'info', 7000);
      const ext = /\.webm$/i.test(file.name) || file.type === 'video/webm' ? 'webm' : 'mp4';
      const p = newMediaPath('videos', file.name, ext);
      S.pending.set(p, { blob: file, url: URL.createObjectURL(file), size: file.size, type: file.type || 'video/mp4' });
      out.push(p);
    } else {
      if (!/^image\//.test(file.type) && !/\.(jpe?g|png|webp|gif|avif|heic)$/i.test(file.name)) { toast(`“${file.name}” isn’t an image.`, 'error'); continue; }
      try {
        const r = await prepareImage(file, max || [2000, 2000]);
        const p = newMediaPath(folder, file.name, r.ext);
        S.pending.set(p, { blob: r.blob, url: URL.createObjectURL(r.blob), size: r.blob.size, type: r.blob.type, w: r.w, h: r.h });
        out.push(p);
      } catch (e) { toast(e.message, 'error'); }
    }
  }
  return out;
}
// uploads referenced by a value, ready to commit
function pendingIn(value) {
  const s = JSON.stringify(value || {});
  return [...S.pending.keys()].filter(p => s.includes(`"${p}"`));
}
function clearPending() { for (const [, f] of S.pending) URL.revokeObjectURL(f.url); S.pending.clear(); }
async function pendingChanges(value) {
  const paths = pendingIn(value);
  return Promise.all(paths.map(async p => ({ path: p, data: new Uint8Array(await S.pending.get(p).blob.arrayBuffer()) })));
}
// after a commit: keep showing the local copies until the website has them
function settlePending(paths) {
  for (const p of paths) {
    const f = S.pending.get(p); if (!f) continue;
    S.local.set(p, f.url); S.pending.delete(p);
    S.media.unshift({ path: p, size: f.size });
  }
  for (const [p, f] of S.pending) URL.revokeObjectURL(f.url);
  S.pending.clear();
  refreshMedia();
}

// ------------------------------------------------------------------ pickers
function pickMedia({ ftype = 'image', multiple = false } = {}) {
  const items = () => [...[...S.pending.keys()].map(p => ({ path: p, size: S.pending.get(p).size })), ...S.media]
    .filter(m => (ftype === 'video' ? isVideo(m.path) : isImage(m.path)));
  const chosen = new Set();
  let q = '';
  const grid = () => {
    const list = items().filter(m => !q || m.path.toLowerCase().includes(q));
    return list.length ? list.map(m => `<button type="button" data-pick="${esc(m.path)}" aria-pressed="${chosen.has(m.path)}"><span class="lib__img">${ftype === 'video' ? `<video src="${esc(mediaUrl(m.path))}" muted preload="metadata"></video>` : imgTag(m.path)}</span><span class="lib__name">${esc(basename(m.path))}</span></button>`).join('')
      : `<p class="muted">No ${ftype === 'video' ? 'videos' : 'images'} found.</p>`;
  };
  return modal({
    title: ftype === 'video' ? 'Choose a video' : (multiple ? 'Choose images' : 'Choose an image'), wide: true,
    body: `<div class="toolbar" style="margin:0"><div class="search">${ic('search')}<input class="input" type="search" placeholder="Search by file name" data-q></div><span class="hint">${multiple ? 'Select one or more.' : 'Select one.'} Uploads first, then the website’s own images.</span></div><div class="lib" data-grid>${grid()}</div>`,
    actions: [{ label: 'Cancel', value: false, closeOnFalse: true }, { label: multiple ? 'Add selected' : 'Use this', primary: true, value: () => (chosen.size ? [...chosen] : false) }],
    onOpen(w) {
      const g = w.querySelector('[data-grid]');
      w.querySelector('[data-q]').addEventListener('input', e => { q = e.target.value.trim().toLowerCase(); g.innerHTML = grid(); });
      g.addEventListener('click', e => {
        const b = e.target.closest('[data-pick]'); if (!b) return;
        const p = b.dataset.pick;
        if (!multiple) { chosen.clear(); g.querySelectorAll('[aria-pressed="true"]').forEach(x => x.setAttribute('aria-pressed', 'false')); }
        if (chosen.has(p)) { chosen.delete(p); b.setAttribute('aria-pressed', 'false'); } else { chosen.add(p); b.setAttribute('aria-pressed', 'true'); }
      });
      g.addEventListener('dblclick', e => { const b = e.target.closest('[data-pick]'); if (b && !multiple) { chosen.clear(); chosen.add(b.dataset.pick); w.querySelector('.modal__foot .btn--primary').click(); } });
    },
  }).then(v => (Array.isArray(v) ? v : null));
}
function pickProducts(already = []) {
  const chosen = new Set();
  let q = '';
  const all = () => values('products').slice().sort(byOrder).filter(p => !already.includes(String(p.id)));
  const grid = () => {
    const list = all().filter(p => !q || `${p.name} ${p.id} ${p.collection}`.toLowerCase().includes(q));
    return list.length ? list.map(p => `<button type="button" data-pick="${esc(p.id)}" aria-pressed="${chosen.has(String(p.id))}"><span class="lib__img" style="aspect-ratio:4/5">${p.images && p.images[0] ? imgTag(p.images[0]) : ''}</span><span class="lib__name"><b style="color:var(--ink);font-weight:500">${esc(p.name)}</b><br>${esc(p.id)}</span></button>`).join('')
      : '<p class="muted">No more products to add.</p>';
  };
  return modal({
    title: 'Add products', wide: true,
    body: `<div class="toolbar" style="margin:0"><div class="search">${ic('search')}<input class="input" type="search" placeholder="Search name or reference" data-q></div><span class="hint">They are added in the order you select them.</span></div><div class="lib" data-grid>${grid()}</div>`,
    actions: [{ label: 'Cancel', value: false, closeOnFalse: true }, { label: 'Add', primary: true, value: () => (chosen.size ? [...chosen] : false) }],
    onOpen(w) {
      const g = w.querySelector('[data-grid]');
      w.querySelector('[data-q]').addEventListener('input', e => { q = e.target.value.trim().toLowerCase(); g.innerHTML = grid(); });
      g.addEventListener('click', e => {
        const b = e.target.closest('[data-pick]'); if (!b) return;
        const id = b.dataset.pick;
        if (chosen.has(id)) { chosen.delete(id); b.setAttribute('aria-pressed', 'false'); } else { chosen.add(id); b.setAttribute('aria-pressed', 'true'); }
      });
    },
  }).then(v => (Array.isArray(v) ? v : null));
}
function promptText(title, label, value = '', placeholder = '') {
  return modal({
    title, body: `<div class="field"><label class="label" for="pt">${esc(label)}</label><input class="input" id="pt" type="text" value="${esc(value)}" placeholder="${esc(placeholder)}"></div>`,
    actions: [{ label: 'Cancel', value: false, closeOnFalse: true }, { label: 'OK', primary: true, value: w => w.querySelector('#pt').value.trim() }],
    onOpen(w, close) { w.querySelector('#pt').addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); close(w.querySelector('#pt').value.trim()); } }); },
  }).then(v => (typeof v === 'string' ? v : null));
}

// ------------------------------------------------------------------ binding an editor to the draft
function markDirty() {
  if (!S.draft) return;
  S.dirty = true;
  $$('[data-savestate]').forEach(el => { el.classList.add('is-dirty'); el.querySelector('span:last-child').textContent = 'Unsaved changes'; });
  $$('[data-save]').forEach(b => { b.disabled = false; });
}
function rerender() { if (S.ui.render) { const y = window.scrollY; S.ui.render(); window.scrollTo(0, y); } }
function coerce(el) {
  const k = el.dataset.kind;
  if (k === 'bool') return el.checked;
  if (k === 'number') return el.value === '' ? '' : Number(el.value);
  if (k === 'lines') return el.value.split('\n').map(s => s.trim()).filter(Boolean);
  return el.value;
}
function bindEditor(root) {
  if (root.dataset.bound) return; root.dataset.bound = '1';
  root.addEventListener('input', e => {
    const el = e.target;
    if (el.dataset.rtArea !== undefined) { setAt(S.draft.value, el.dataset.rtArea, sanitizeHTML(el.innerHTML)); updateSummary(el); return markDirty(); }
    if (!el.dataset.bind) return;
    if (el.type === 'checkbox' || el.tagName === 'SELECT') return;     // handled on change
    setAt(S.draft.value, el.dataset.bind, coerce(el));
    if (S.ui.autoKey && el.dataset.bind === S.ui.autoKey.from && S.draft.isNew && !S.ui.autoKey.touched) {
      const k = S.ui.autoKey.make(el.value); setAt(S.draft.value, S.ui.autoKey.to, k);
      const ki = root.querySelector(`[data-bind="${S.ui.autoKey.to}"]`); if (ki) ki.value = k;
    }
    if (S.ui.autoKey && el.dataset.bind === S.ui.autoKey.to) S.ui.autoKey.touched = true;
    updateSummary(el);
    markDirty();
  });
  root.addEventListener('change', async e => {
    const el = e.target;
    if (el.dataset.link) {
      const path = el.dataset.link, input = el.parentElement.querySelector('[data-bind]');
      S.ui.customLinks = S.ui.customLinks || new Set();
      if (el.value === '__custom') { S.ui.customLinks.add(path); input.hidden = false; input.focus(); return; }
      S.ui.customLinks.delete(path); input.hidden = true; input.value = el.value; setAt(S.draft.value, path, el.value); updateSummary(el); return markDirty();
    }
    if (el.dataset.upload) {
      const files = el.files; if (!files || !files.length) return;
      await useFiles(el.dataset.upload, el.dataset.mode, files);
      el.value = '';
      return;
    }
    if (el.dataset.bind && (el.type === 'checkbox' || el.tagName === 'SELECT')) {
      setAt(S.draft.value, el.dataset.bind, coerce(el));
      updateSummary(el); markDirty();
      if (el.closest('[data-rerender]') || S.ui.rerenderOn && S.ui.rerenderOn.includes(el.dataset.bind)) rerender();
      if (el.tagName === 'SELECT' && el.closest('.inline')) { const u = el.closest('.inline').querySelector('use'); if (u) u.setAttribute('href', '#x-' + (el.value || 'sparkle')); }
    }
  });
  root.addEventListener('click', async e => {
    const rt = e.target.closest('[data-rt]');
    if (rt) {
      e.preventDefault();
      const area = rt.closest('.rt').querySelector('[data-rt-area]');
      area.focus();
      if (rt.dataset.rt === 'link') {
        const sel = window.getSelection(); const range = sel.rangeCount ? sel.getRangeAt(0).cloneRange() : null;
        const url = await promptText('Add a link', 'Link address', 'https://', 'https://…, #story-…, or whatsapp');
        area.focus(); if (range) { sel.removeAllRanges(); sel.addRange(range); }
        if (url) document.execCommand('createLink', false, url);
      } else document.execCommand(rt.dataset.rt, false, null);
      setAt(S.draft.value, area.dataset.rtArea, sanitizeHTML(area.innerHTML)); markDirty();
      return;
    }
    const b = e.target.closest('[data-act]'); if (!b || b.disabled) return;
    const act = b.dataset.act, path = b.dataset.path, i = Number(b.dataset.i);
    const arr = () => { let a = getAt(S.draft.value, path); if (!Array.isArray(a)) { a = []; setAt(S.draft.value, path, a); } return a; };
    if (act === 'toggle-item') { S.ui.open = S.ui.open || new Set(); const it = b.closest('.item'); it.classList.toggle('is-open'); if (it.classList.contains('is-open')) S.ui.open.add(path); else S.ui.open.delete(path); return; }
    if (act === 'seg') { setAt(S.draft.value, path, b.dataset.value); markDirty(); return rerender(); }
    if (act === 'clear') { setAt(S.draft.value, path, ''); markDirty(); return rerender(); }
    if (act === 'move') { const a = arr(), j = i + Number(b.dataset.d); if (j < 0 || j >= a.length) return; [a[i], a[j]] = [a[j], a[i]]; shiftOpen(path, i, j); markDirty(); return rerender(); }
    if (act === 'remove') {
      if (b.dataset.confirm && !(await ask('Delete this item?', 'It will be removed when you save.', 'Delete', { danger: true }))) return;
      arr().splice(i, 1); S.ui.open && S.ui.open.clear(); markDirty(); return rerender();
    }
    if (act === 'add') { const a = arr(); a.push({}); S.ui.open = S.ui.open || new Set(); S.ui.open.add(join(path, a.length - 1)); markDirty(); return rerender(); }
    if (act === 'add-block') { const a = arr(); a.push(b.dataset.type === 'component' ? { type: 'component', name: 'library' } : b.dataset.type === 'buttons' ? { type: 'buttons', items: [{ style: 'solid' }] } : { type: b.dataset.type }); S.ui.open = S.ui.open || new Set(); S.ui.open.add(join(path, a.length - 1)); markDirty(); return rerender(); }
    if (act === 'pick-products') { const add = await pickProducts(arr().map(String)); if (add && add.length) { arr().push(...add); markDirty(); rerender(); } return; }
    if (act === 'library') {
      const multi = b.dataset.mode !== 'single';
      const got = await pickMedia({ ftype: b.dataset.ftype || 'image', multiple: multi });
      if (!got) return;
      if (b.dataset.mode === 'single') setAt(S.draft.value, path, got[0]);
      else if (b.dataset.mode === 'pages') arr().push(...got.map(p => ({ image: p })));
      else arr().push(...got);
      markDirty(); return rerender();
    }
  });
  // drag files in, and drag thumbnails to reorder
  root.addEventListener('dragover', e => {
    const z = e.target.closest('[data-drop]');
    if (z && e.dataTransfer && [...e.dataTransfer.types].includes('Files')) { e.preventDefault(); z.classList.add('is-over'); return; }
    const t = e.target.closest('[data-thumb]');
    if (t && S.ui.dragging && S.ui.dragging.list === t.dataset.list) { e.preventDefault(); $$('.is-target', root).forEach(x => x.classList.remove('is-target')); t.classList.add('is-target'); }
  });
  root.addEventListener('dragleave', e => { const z = e.target.closest('[data-drop]'); if (z && !z.contains(e.relatedTarget)) z.classList.remove('is-over'); });
  root.addEventListener('drop', async e => {
    const z = e.target.closest('[data-drop]');
    if (z && e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length) { e.preventDefault(); z.classList.remove('is-over'); return useFiles(z.dataset.drop, z.dataset.mode, e.dataTransfer.files); }
    const t = e.target.closest('[data-thumb]');
    if (t && S.ui.dragging && S.ui.dragging.list === t.dataset.list) {
      e.preventDefault();
      const a = getAt(S.draft.value, t.dataset.list), from = S.ui.dragging.i, to = Number(t.dataset.thumb);
      if (Array.isArray(a) && from !== to) { const [x] = a.splice(from, 1); a.splice(to, 0, x); markDirty(); rerender(); }
    }
  });
  root.addEventListener('dragstart', e => { const t = e.target.closest('[data-thumb]'); if (t) { S.ui.dragging = { list: t.dataset.list, i: Number(t.dataset.thumb) }; t.classList.add('is-drag'); e.dataTransfer.effectAllowed = 'move'; e.dataTransfer.setData('text/plain', t.dataset.thumb); } });
  root.addEventListener('dragend', () => { S.ui.dragging = null; $$('.is-drag, .is-target', root).forEach(x => x.classList.remove('is-drag', 'is-target')); });
}
function shiftOpen(path, i, j) {
  if (!S.ui.open) return;
  const a = join(path, i), b = join(path, j), hasA = S.ui.open.has(a), hasB = S.ui.open.has(b);
  S.ui.open.delete(a); S.ui.open.delete(b); if (hasA) S.ui.open.add(b); if (hasB) S.ui.open.add(a);
}
function updateSummary(el) {
  const item = el.closest('[data-item]'); if (!item || !S.ui.sum) return;
  const p = item.dataset.item, fn = S.ui.sum.get(p); if (!fn) return;
  const txt = fn(getAt(S.draft.value, p) || {}) || '';
  const s = item.querySelector(`[data-sum="${CSS.escape(p)}"]`);
  if (s) { s.textContent = txt || 'Empty, click to fill in'; s.classList.toggle('is-empty', !txt); }
}
async function useFiles(path, mode, files) {
  const f = findField(path);
  const ftype = f && f.type === 'video' ? 'video' : 'image';
  if (mode === 'single' && files.length > 1) files = [files[0]];
  toast(`Preparing ${files.length > 1 ? files.length + ' files' : 'the file'}…`, 'ok', 1800);
  const paths = await addFiles(files, { folder: (f && f.folder) || 'images', ftype, max: f && f.max });
  if (!paths.length) return;
  if (mode === 'single') setAt(S.draft.value, path, paths[0]);
  else {
    let a = getAt(S.draft.value, path); if (!Array.isArray(a)) { a = []; setAt(S.draft.value, path, a); }
    if (mode === 'pages') a.push(...paths.map(p => ({ image: p })));
    else a.push(...paths.slice(0, Math.max(0, ((f && f.limit) || 99) - a.length)));
  }
  markDirty(); rerender();
}
// find the field definition for a draft path (numbers in the path are list positions)
function findField(path) {
  const schema = S.ui.schema; if (!schema) return null;
  const parts = path.split('.');
  const search = (fields, idx, obj) => {
    for (const f of fields) {
      const kp = f.key.split('.');
      if (f.type === 'group') { if (kp.every((k, n) => parts[idx + n] === k)) { const r = search(f.fields, idx + kp.length, getAt(obj || {}, f.key)); if (r) return r; } continue; }
      if (!kp.every((k, n) => parts[idx + n] === k)) continue;
      const next = idx + kp.length;
      if (next === parts.length) return f;
      if ((f.type === 'list' || f.type === 'pages') && /^\d+$/.test(parts[next])) {
        if (next + 1 === parts.length) return f;
        if (f.type === 'pages') return { type: 'image', folder: f.folder, max: f.max };
        return search(f.fields, next + 1, getAt(obj || {}, join(f.key, parts[next])));
      }
      if (f.type === 'blocks' && /^\d+$/.test(parts[next])) {
        const b = getAt(obj || {}, join(f.key, parts[next])) || {};
        const def = f.blocks[b.type];
        return def ? search(def.fields, next + 1, b) : null;
      }
    }
    return null;
  };
  for (const sec of schema.sections) { const r = search(sec.fields, 0, S.draft.value); if (r) return r; }
  return null;
}
// required fields and simple checks; returns { path: message }
function validate(schema, value) {
  const errs = {};
  const walk = (fields, base, obj) => fields.forEach(f => {
    if (f.showIf && !f.showIf(obj || {})) return;
    const p = join(base, f.key), v = getAt(obj || {}, f.key);
    if (f.type === 'group') return walk(f.fields, p, v || {});
    if (f.required && (v == null || String(v).trim() === '')) errs[p] = `Add ${f.label ? f.label.toLowerCase() : 'this'}.`;
    if (f.type === 'slug' && v && !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(v)) errs[p] = 'Use lowercase letters, numbers and single hyphens, for example cny-2027.';
    if (f.type === 'ref' && v && !/^[A-Za-z0-9]+([-_][A-Za-z0-9]+)*$/.test(v)) errs[p] = 'Use letters, numbers and hyphens only, for example P3843-A.';
    if (f.type === 'list' && Array.isArray(v)) v.forEach((it, i) => walk(f.fields, join(p, i), it || {}));
    if (f.type === 'blocks' && Array.isArray(v)) v.forEach((b, i) => { const d = f.blocks[b && b.type]; if (d) walk(d.fields, join(p, i), b); });
  });
  schema.sections.forEach(sec => walk(sec.fields, '', value));
  if (schema.validate) Object.assign(errs, schema.validate(value) || {});
  return errs;
}
// tidy a value before saving: no empty strings/arrays inside objects, numbers stay numbers
function tidy(v) {
  if (Array.isArray(v)) return v.map(tidy).filter(x => x !== undefined && !(x && typeof x === 'object' && !Array.isArray(x) && !Object.keys(x).length));
  if (v && typeof v === 'object') {
    const o = {};
    for (const [k, x] of Object.entries(v)) { const t = tidy(x); if (t === undefined || t === '' || t === null) continue; if (Array.isArray(t) && !t.length && !KEEP_EMPTY.has(k)) continue; o[k] = t; }
    return o;
  }
  if (typeof v === 'string') return v.trim() === '' ? '' : v;
  return v;
}
const KEEP_EMPTY = new Set(['items', 'images', 'pages', 'body', 'announcements', 'promos', 'experience', 'parts', 'builtin_brochures']);

// ------------------------------------------------------------------ what each kind of content looks like in the editor
const BANNER = [
  { key: 'media', label: 'Banner type', type: 'segmented', options: [['video', 'Video'], ['image', 'Image']], default: 'image' },
  { key: 'video', label: 'Banner video', type: 'video', folder: 'videos', hint: 'MP4, 1920 × 1080, 8 to 12 seconds, no sound, ideally under 10 MB. Keep the jewellery in the middle-right of the frame.', showIf: v => v.media === 'video' },
  { key: 'image', label: 'Banner image', type: 'image', folder: 'images', max: [2400, 1600], ratio: '16/9', hint: '1920 × 1080. With a video, this shows while the video loads and on phones that save data.' },
  { key: 'mobile_image', label: 'Phone image (optional)', type: 'image', folder: 'images', max: [1350, 1800], ratio: '4/5', hint: 'Portrait 1080 × 1350. Leave empty to crop the banner for phones.' },
  { key: 'title', label: 'Headline', type: 'text', placeholder: 'The Christmas Edit' },
  { key: 'subtitle', label: 'Line under the headline', type: 'text' },
  { key: 'button_label', label: 'Button text', type: 'text', half: true, placeholder: 'Explore now' },
  { key: 'button_link', label: 'Button link', type: 'link', half: true },
  { key: 'text', label: 'Text colour', type: 'segmented', options: [['light', 'Light'], ['dark', 'Dark']], default: 'light', half: true, hint: 'Light text for dark pictures, dark text for bright ones.' },
  { key: 'focus', label: 'On phones, keep in view', type: 'segmented', options: [['left', 'Left'], ['centre', 'Centre'], ['right', 'Right']], default: 'centre', half: true },
];
const ANNOUNCEMENTS = { type: 'list', max: 6, addLabel: 'Add a message', summary: i => i.text, fields: [
  { key: 'text', label: 'Message', type: 'text', placeholder: 'Free gift wrapping with every piece' },
  { key: 'link_label', label: 'Link text', type: 'text', half: true, placeholder: 'Find out more' },
  { key: 'link', label: 'Link', type: 'link', half: true },
] };

const SCHEMAS = {
  campaigns: {
    label: 'Campaign', plural: 'Campaigns', key: 'slug',
    blank: () => ({ title: '', slug: '', active: false, start: '', end: '', announcements: [], hero: { media: 'image', text: 'light', focus: 'centre' }, products: { title: '', items: [] }, promos: [], editorial: {} }),
    sections: [
      { title: 'Campaign', fields: [
        { key: 'title', label: 'Campaign name', type: 'text', required: true, placeholder: 'Chinese New Year 2027' },
        { key: 'slug', label: 'Short name', type: 'slug', required: true, hint: 'Used for the file and the preview link. Lowercase letters, numbers and hyphens.' },
        { key: 'active', label: 'Live on the website', type: 'toggle', hint: 'The home page shows the live campaign whose dates include today (Malaysia time). If two overlap, the one that starts later wins.' },
        { key: 'start', label: 'Starts', type: 'date', half: true },
        { key: 'end', label: 'Ends', type: 'date', half: true },
      ] },
      { title: 'Announcement bar', hint: 'The thin bar above the menu. Messages rotate every few seconds.', fields: [{ key: 'announcements', ...ANNOUNCEMENTS }] },
      { title: 'Home page banner', hint: 'The full-width banner at the top of the home page.', fields: [{ key: 'hero', type: 'group', fields: BANNER }] },
      { title: 'Product carousel', hint: 'The row of products under the banner.', fields: [
        { key: 'products.title', label: 'Heading', type: 'text', placeholder: 'Christmas 2026' },
        { key: 'products.items', label: 'Products, in order', type: 'products' },
      ] },
      { title: 'Promo tiles', hint: 'Up to three pictures with links, under the carousel.', fields: [{ key: 'promos', type: 'list', max: 3, addLabel: 'Add a tile', summary: i => i.title, fields: [
        { key: 'image', label: 'Picture', type: 'image', folder: 'images', max: [1600, 1200], ratio: '7/5', hint: 'Landscape, about 1400 × 1000.' },
        { key: 'title', label: 'Title', type: 'text' },
        { key: 'link_label', label: 'Link text', type: 'text', half: true, placeholder: 'Shop now' },
        { key: 'link', label: 'Link', type: 'link', half: true },
      ] }] },
      { title: 'Editorial feature', hint: 'Text beside a large picture, linking to a story.', fields: [
        { key: 'editorial.story', label: 'Story', type: 'story' },
        { key: 'editorial.title', label: 'Heading', type: 'text', hint: 'Leave empty to use the story’s title.' },
        { key: 'editorial.text', label: 'Short text', type: 'textarea' },
        { key: 'editorial.link_label', label: 'Link text', type: 'text', placeholder: 'Read the story' },
        { key: 'editorial.image', label: 'Picture', type: 'image', folder: 'images', max: [2000, 1500], ratio: '16/10', hint: 'Leave empty to use the story’s main picture.' },
      ] },
    ],
    validate: v => (v.start && v.end && v.end < v.start ? { end: 'The end date is before the start date.' } : {}),
  },
  products: {
    label: 'Product', plural: 'Products', key: 'id',
    blank: () => ({ id: '', name: '', collection: '', kind: 'Bracelet', images: [], video: '', description: '', parts: [], gold: 'Yellow 916 gold', weight: '', price: '', order: nextOrder('products'), show: true }),
    sections: [
      { title: 'Product', fields: [
        { key: 'name', label: 'Name', type: 'text', required: true, placeholder: 'Colonne' },
        { key: 'id', label: 'Reference', type: 'ref', required: true, half: true, hint: 'Your product code, e.g. 3945 or P3843-A.' },
        { key: 'kind', label: 'Type', type: 'select', half: true, options: ['Bracelet', 'Charm', 'Necklace', 'Pendant', 'Bangle', 'Ring', 'Earrings'] },
        { key: 'collection', label: 'Collection', type: 'select', empty: 'No collection', options: () => values('collections').slice().sort(byOrder).map(c => [c.id, c.name || c.id]) },
      ] },
      { title: 'Photos and video', fields: [
        { key: 'images', label: 'Photos', type: 'images', folder: 'products', max: [1500, 1875], limit: 8, hint: 'The first photo is the cover on cards. Portrait 4:5 (1200 × 1500) looks best; photos are resized and compressed for you.' },
        { key: 'video', label: 'Video (optional)', type: 'video', folder: 'videos', hint: 'Plays in the product window. MP4, ideally under 10 MB.' },
      ] },
      { title: 'Details', fields: [
        { key: 'description', label: 'Description', type: 'textarea', rows: 4 },
        { key: 'parts', label: 'Made of', type: 'tags', hint: 'One bead, pipe or part per line.' },
        { key: 'gold', label: 'Gold', type: 'text', placeholder: 'Yellow 916 gold (1C)' },
        { key: 'weight', label: 'Weight', type: 'text', half: true, placeholder: '2.05 g', hint: 'Empty shows “Weighed at the counter”.' },
        { key: 'price', label: 'Price line', type: 'text', half: true, hint: 'Empty shows “Priced by weight”.' },
      ] },
      { title: 'On the website', fields: [
        { key: 'show', label: 'Show on the website', type: 'toggle', half: true },
        { key: 'order', label: 'Order', type: 'number', half: true, hint: 'Lower numbers come first.' },
      ] },
    ],
  },
  collections: {
    label: 'Collection', plural: 'Collections', key: 'id',
    blank: () => ({ id: '', name: '', idea: '', text: '', image: '', order: nextOrder('collections'), show_on_home: true }),
    sections: [
      { title: 'Collection', fields: [
        { key: 'name', label: 'Name', type: 'text', required: true },
        { key: 'id', label: 'Short name', type: 'slug', required: true, hint: 'Used in links such as #collection-colonne.' },
        { key: 'idea', label: 'One-line idea', type: 'text' },
        { key: 'text', label: 'Description', type: 'textarea' },
        { key: 'image', label: 'Tile picture', type: 'image', folder: 'images', max: [1200, 1200], ratio: '1/1', hint: 'Square, 1000 × 1000. Shown under “Shop by collection”.' },
      ] },
      { title: 'On the website', fields: [
        { key: 'show_on_home', label: 'Show under “Shop by collection”', type: 'toggle', half: true },
        { key: 'order', label: 'Order', type: 'number', half: true, hint: 'Lower numbers come first.' },
      ] },
    ],
  },
  editorial: {
    label: 'Story', plural: 'Editorial', key: 'slug',
    blank: () => ({ title: '', slug: '', category: 'Craft', read: 3, date: todayMY(), hero: '', hero_alt: '', dek: '', order: nextOrder('editorial'), show: true, body: [{ type: 'text', html: '' }] }),
    sections: [
      { title: 'Story', fields: [
        { key: 'title', label: 'Title', type: 'text', required: true, hint: 'Put a word between *asterisks* to set it in italic, e.g. An alphabet in *gold*.' },
        { key: 'slug', label: 'Short name', type: 'slug', required: true, hint: 'The story’s link becomes #story-short-name.' },
        { key: 'category', label: 'Category', type: 'select', half: true, options: ['Craft', 'Collections', 'Guides', 'Gifting'] },
        { key: 'read', label: 'Minutes to read', type: 'number', half: true },
        { key: 'date', label: 'Date', type: 'date', half: true },
        { key: 'dek', label: 'Summary', type: 'textarea', hint: 'One or two sentences under the title and on the story card.' },
      ] },
      { title: 'Main picture', fields: [
        { key: 'hero', label: 'Picture', type: 'image', folder: 'images', max: [2000, 1500], ratio: '16/10', hint: 'Landscape, 1600 × 1000.' },
        { key: 'hero_alt', label: 'Describe the picture', type: 'text', hint: 'For screen readers and search engines.' },
      ] },
      { title: 'The story', hint: 'Build the story from blocks, in reading order.', fields: [{ key: 'body', type: 'blocks', blocks: {
        text: { label: 'Text', fields: [{ key: 'html', label: 'Text', type: 'richtext' }], summary: b => stripHtml(b.html).slice(0, 90) },
        heading: { label: 'Heading', fields: [{ key: 'text', label: 'Heading', type: 'text' }], summary: b => b.text },
        image: { label: 'Picture', fields: [
          { key: 'image', label: 'Picture', type: 'image', folder: 'images', max: [2000, 2000], ratio: '1/1' },
          { key: 'alt', label: 'Describe the picture', type: 'text' }, { key: 'caption', label: 'Caption', type: 'text' }], summary: b => b.caption || b.alt || basename(b.image) },
        quote: { label: 'Quote', fields: [{ key: 'text', label: 'Quote', type: 'textarea' }], summary: b => b.text },
        products: { label: 'Products', fields: [{ key: 'title', label: 'Heading', type: 'text', placeholder: 'Pieces in this story' }, { key: 'items', label: 'Products', type: 'products' }], summary: b => [b.title, `${(b.items || []).length} products`].filter(Boolean).join(' · ') },
        component: { label: 'Built-in section', fields: [{ key: 'name', label: 'Section', type: 'select', required: true, options: [['library', 'The bead library (19 parts)'], ['colours', 'Three gold colours'], ['steps', 'From sketch to gold, step by step']] }], summary: b => ({ library: 'The bead library', colours: 'Three gold colours', steps: 'From sketch to gold' }[b.name] || '') },
        buttons: { label: 'Buttons', fields: [{ key: 'items', type: 'list', max: 3, addLabel: 'Add a button', summary: i => i.label, fields: [
          { key: 'label', label: 'Button text', type: 'text' }, { key: 'link', label: 'Link', type: 'link' },
          { key: 'style', label: 'Style', type: 'segmented', options: [['solid', 'Solid'], ['line', 'Outline']], default: 'solid' }] }], summary: b => (b.items || []).map(x => x.label).filter(Boolean).join(' · ') },
      } }] },
      { title: 'On the website', fields: [
        { key: 'show', label: 'Show on the website', type: 'toggle', half: true },
        { key: 'order', label: 'Order', type: 'number', half: true, hint: '1 is the featured story.' },
      ] },
    ],
  },
  brochures: {
    label: 'e-Brochure', plural: 'e-Brochures', key: 'slug',
    blank: () => ({ title: '', slug: '', subtitle: '', cover: '', pages: [], order: nextOrder('brochures'), show: true }),
    sections: [
      { title: 'e-Brochure', fields: [
        { key: 'title', label: 'Title', type: 'text', required: true, placeholder: 'Chinese New Year 2027' },
        { key: 'slug', label: 'Short name', type: 'slug', required: true, hint: 'Link to it with #brochure-short-name.' },
        { key: 'subtitle', label: 'Subtitle', type: 'text' },
        { key: 'cover', label: 'Cover', type: 'image', folder: 'brochures', max: [1600, 2000], ratio: '4/5', hint: 'Portrait 4:5, 1600 × 2000.' },
      ] },
      { title: 'Pages', hint: 'Design the brochure as usual, export each page as an image (portrait 4:5, 1600 × 2000), and add them here in order. The website adds a back cover.', fields: [
        { key: 'pages', type: 'pages', folder: 'brochures', max: [1600, 2000] },
      ] },
      { title: 'On the website', fields: [
        { key: 'show', label: 'Show on the e-Brochure shelf', type: 'toggle', half: true },
        { key: 'order', label: 'Order on the shelf', type: 'number', half: true },
      ] },
    ],
    validate: v => (!(v.pages || []).length ? { pages: 'Add at least one page.' } : {}),
  },
  home: {
    label: 'Home page', plural: 'Home page', key: null,
    sections: [
      { title: 'Default banner', hint: 'Shown when no campaign is live.', fields: [{ key: 'hero', type: 'group', fields: BANNER }] },
      { title: 'Default announcement bar', hint: 'Shown when no campaign is live.', fields: [{ key: 'announcements', ...ANNOUNCEMENTS }] },
      { title: 'Shop by collection', fields: [{ key: 'collections_title', label: 'Heading', type: 'text', placeholder: 'Shop by collection' }] },
      { title: 'Book an appointment', fields: [{ key: 'appointment', type: 'group', fields: [
        { key: 'image', label: 'Picture', type: 'image', folder: 'images', max: [1350, 1700], ratio: '4/5', hint: 'Portrait, about 1080 × 1350.' },
        { key: 'title', label: 'Heading', type: 'text' }, { key: 'text', label: 'Text', type: 'textarea' },
        { key: 'button_label', label: 'Button text', type: 'text', half: true }, { key: 'button_link', label: 'Button link', type: 'link', half: true },
      ] }] },
      { title: 'Services row', hint: 'Four short promises with icons, at the bottom of the home page.', fields: [
        { key: 'experience_title', label: 'Heading', type: 'text', placeholder: 'The Yi Xing experience' },
        { key: 'experience', type: 'list', max: 4, addLabel: 'Add a service', summary: i => i.title, fields: [
          { key: 'icon', label: 'Icon', type: 'icon', half: true, required: true, options: [['scale', 'Scale'], ['ruler', 'Sizing'], ['gift', 'Gift'], ['chat', 'Chat'], ['calendar', 'Calendar'], ['sparkle', 'Sparkle']] },
          { key: 'title', label: 'Title', type: 'text', half: true }, { key: 'text', label: 'Text', type: 'textarea' },
          { key: 'link_label', label: 'Link text', type: 'text', half: true }, { key: 'link', label: 'Link', type: 'link', half: true },
        ] },
      ] },
    ],
  },
};
function nextOrder(kind) { const o = values(kind).map(v => Number(v.order)).filter(n => !isNaN(n)); return o.length ? Math.max(...o) + 1 : 1; }

// ------------------------------------------------------------------ campaigns: what the home page shows
const isOn = c => c && (c.active === true || c.active === 'true');
function liveCampaign() {
  const t = todayMY();
  return values('campaigns').filter(c => isOn(c) && (!c.start || String(c.start) <= t) && (!c.end || String(c.end) >= t))
    .sort((a, b) => String(b.start || '').localeCompare(String(a.start || '')))[0] || null;
}
function campaignStatus(c) {
  const t = todayMY(), live = liveCampaign();
  if (!isOn(c)) return ['off', 'Switched off'];
  if (c.start && String(c.start) > t) return ['soon', 'Starts ' + fmtDate(c.start)];
  if (c.end && String(c.end) < t) return ['off', 'Ended ' + fmtDate(c.end)];
  if (live && live.slug !== c.slug) return ['soon', 'Hidden by ' + plain(live.title)];
  return ['live', 'Live now'];
}
const chip = ([k, t]) => `<span class="chip chip--${k}">${esc(t)}</span>`;
const dates = c => (c.start || c.end ? `${c.start ? fmtDate(c.start) : 'Any time'} – ${c.end ? fmtDate(c.end) : 'no end date'}` : 'No dates set');
const heroThumb = h => (h && h.image ? imgTag(h.image) : h && h.video ? `<video src="${esc(mediaUrl(h.video))}" muted preload="metadata"></video>` : `<span class="tile__ph">${ic('image', 'icon--lg')}</span>`);

// ------------------------------------------------------------------ overview
VIEWS.overview = async () => {
  const u = S.session.user, live = liveCampaign(), t = todayMY();
  const soon = values('campaigns').filter(c => isOn(c) && c.start && String(c.start) > t).sort((a, b) => String(a.start).localeCompare(String(b.start)));
  const shownProducts = values('products').filter(p => p.show !== false).length;
  const first = (u.name || '').split(' ')[0];
  shell('overview', [['Overview', '#overview']], `
    <div class="page-head"><div><h1 class="page-title">${esc(greeting())}${first ? `, <em>${esc(first)}</em>` : ''}</h1>
      <p class="page-sub">This is what the website shows today, ${esc(fmtDate(t))}. Every change you save here goes live on the website in about a minute.</p></div></div>
    <div style="display:grid;gap:20px">
      ${live ? `<article class="card feature"><div class="feature__media">${heroThumb(live.hero)}</div>
        <div class="feature__body">${chip(['live', 'On the home page now'])}<h2 class="feature__title">${esc(plain(live.title))}</h2>
        <p class="muted">${esc(dates(live))}</p><p>${esc((live.hero && live.hero.title) || '')}</p>
        <div class="page-actions"><a class="btn btn--primary" href="#campaigns/${encodeURIComponent(live.slug)}">${ic('pen')}Edit campaign</a><a class="btn" href="${esc(SITE)}" target="_blank" rel="noopener">${ic('external')}See it</a></div></div></article>`
      : `<article class="card card__body"><h2 class="feature__title">No campaign is live</h2><p class="muted" style="margin:.4rem 0 1rem">The home page shows the default banner from Home page settings.</p>
        <div class="page-actions"><a class="btn btn--primary" href="#campaigns/new">${ic('plus')}New campaign</a><a class="btn" href="#home">Edit the default banner</a></div></article>`}
      <div class="stats">
        <a class="card stat" href="#campaigns"><b>${entries('campaigns').length}</b><span>Campaigns${soon.length ? ` · ${soon.length} coming up` : ''}</span></a>
        <a class="card stat" href="#products"><b>${shownProducts}</b><span>Products on the website</span></a>
        <a class="card stat" href="#brochures"><b>${entries('brochures').length + (S.data.home.value.builtin_brochures || BUILTIN_BROCHURES).length}</b><span>e-Brochures</span></a>
        <a class="card stat" href="#editorial"><b>${values('editorial').filter(s => s.show !== false).length}</b><span>Stories</span></a>
      </div>
      <div class="quick">
        <a href="#campaigns/new">${ic('flag')}New campaign</a><a href="#products/new">${ic('gem')}Add a product</a>
        <a href="#brochures/new">${ic('book')}New e-brochure</a><a href="#editorial/new">${ic('pen')}Write a story</a><a href="#media">${ic('upload')}Upload media</a>
      </div>
      <div class="grid-2">
        <section class="card"><div class="card__head"><h2 class="card__title">Coming up</h2><a class="btn btn--sm btn--ghost" href="#campaigns">All campaigns</a></div>
          ${soon.length ? `<ul class="activity">${soon.slice(0, 5).map(c => `<li><b><a href="#campaigns/${encodeURIComponent(c.slug)}">${esc(plain(c.title))}</a></b><span>${esc(dates(c))}</span></li>`).join('')}</ul>`
          : `<div class="card__body muted">Nothing scheduled. Create a campaign, switch it on and give it dates; it appears on the home page by itself on the start date.</div>`}</section>
        <section class="card"><div class="card__head"><h2 class="card__title">Recent changes</h2></div><div data-activity><div class="card__body muted">Loading…</div></div></section>
      </div>
    </div>`);
  try {
    const cs = await GH.commits(8);
    const el = $('[data-activity]'); if (!el) return;
    el.innerHTML = `<ul class="activity">${cs.map(c => { const [line] = c.commit.message.split('\n'); const by = /by (.+)$/m.exec(c.commit.message); return `<li><b title="${esc(line)}">${esc(line)}</b><span>${esc(timeAgo(c.commit.author.date))}</span><span class="muted small" style="grid-column:1/-1">${esc(by ? by[1] : (c.commit.author.name || ''))}</span></li>`; }).join('')}</ul>`;
  } catch (e) { const el = $('[data-activity]'); if (el) el.innerHTML = `<div class="card__body muted">Couldn’t load the history right now.</div>`; }
};

// ------------------------------------------------------------------ lists
function listPage(kind, { crumbs, title, sub, newLabel, toolbar = '', tiles, empty }) {
  shell(kind, crumbs, `<div class="page-head"><div><h1 class="page-title">${title}</h1>${sub ? `<p class="page-sub">${sub}</p>` : ''}</div>
    <div class="page-actions"><a class="btn btn--primary" href="#${kind}/new">${ic('plus')}${esc(newLabel)}</a></div></div>${toolbar}<div data-tiles>${tiles || `<div class="card empty">${empty}</div>`}</div>`);
}
VIEWS.campaigns = async id => {
  if (id) return editEntry('campaigns', id);
  const order = c => { const [k] = campaignStatus(c); return k === 'live' ? 0 : k === 'soon' ? 1 : 2; };
  const list = values('campaigns').sort((a, b) => order(a) - order(b) || String(b.start || '').localeCompare(String(a.start || '')));
  listPage('campaigns', {
    crumbs: [['Campaigns', '#campaigns']], title: 'Campaigns', newLabel: 'New campaign',
    sub: 'A campaign is a season’s home page: banner, announcement bar, product carousel, promo tiles and an editorial feature. Switch one on and give it dates, and it appears by itself.',
    tiles: list.length ? `<div class="tiles tiles--wide">${list.map(c => `<a class="card tile" href="#campaigns/${encodeURIComponent(c.slug)}">
      <div class="tile__media tile__media--wide">${heroThumb(c.hero)}${chip(campaignStatus(c))}</div>
      <div class="tile__body"><span class="tile__name">${esc(plain(c.title) || c.slug)}</span><span class="tile__meta">${esc(dates(c))}</span></div></a>`).join('')}</div>` : '',
    empty: `${ic('flag')}<p>No campaigns yet.</p><a class="btn btn--primary" href="#campaigns/new">${ic('plus')}New campaign</a>`,
  });
};
VIEWS.products = async id => {
  if (id) return editEntry('products', id);
  const f = S.ui.pf || (S.ui.pf = { col: '', q: '' });
  const cols = values('collections').slice().sort(byOrder);
  const draw = () => {
    const list = values('products').slice().sort(byOrder).filter(p => (!f.col || p.collection === f.col) && (!f.q || `${p.name} ${p.id}`.toLowerCase().includes(f.q)));
    $('[data-tiles]').innerHTML = list.length ? `<div class="tiles">${list.map(p => `<a class="card tile" href="#products/${encodeURIComponent(p.id)}">
      <div class="tile__media">${p.images && p.images[0] ? imgTag(p.images[0], p.name) : `<span class="tile__ph">${ic('gem', 'icon--lg')}</span>`}${p.show === false ? chip(['hidden', 'Hidden']) : ''}</div>
      <div class="tile__body"><span class="tile__name">${esc(p.name)}</span><span class="tile__meta">${esc(p.id)}${p.collection && S.data.collections[p.collection] ? ' · ' + esc(S.data.collections[p.collection].value.name) : ''}</span></div></a>`).join('')}</div>`
      : `<div class="card empty">${ic('search')}<p>No products match.</p></div>`;
  };
  listPage('products', {
    crumbs: [['Products', '#products']], title: 'Products', newLabel: 'Add a product',
    sub: 'Each product has its photos, video and details. Product carousels, stories and brochures pick from this list.',
    toolbar: `<div class="toolbar"><div class="search">${ic('search')}<input class="input" type="search" placeholder="Search name or reference" value="${esc(f.q)}" data-q aria-label="Search products"></div>
      <div class="filters" role="group" aria-label="Collection"><button type="button" class="filter" data-col="" aria-pressed="${!f.col}">All</button>${cols.map(c => `<button type="button" class="filter" data-col="${esc(c.id)}" aria-pressed="${f.col === c.id}">${esc(c.name)}</button>`).join('')}</div></div>`,
    tiles: ' ',
  });
  draw();
  $('[data-q]').addEventListener('input', e => { f.q = e.target.value.trim().toLowerCase(); draw(); });
  $('.filters').addEventListener('click', e => { const b = e.target.closest('[data-col]'); if (!b) return; f.col = b.dataset.col; $$('.filters [data-col]').forEach(x => x.setAttribute('aria-pressed', String(x === b))); draw(); });
};
VIEWS.collections = async id => {
  if (id) return editEntry('collections', id);
  const list = values('collections').slice().sort(byOrder);
  const count = cid => values('products').filter(p => p.collection === cid).length;
  listPage('collections', {
    crumbs: [['Collections', '#collections']], title: 'Collections', newLabel: 'New collection',
    sub: 'Collections group the products and make the square tiles under “Shop by collection”.',
    tiles: list.length ? `<div class="tiles">${list.map(c => `<a class="card tile" href="#collections/${encodeURIComponent(c.id)}">
      <div class="tile__media tile__media--square">${c.image ? imgTag(c.image, c.name) : `<span class="tile__ph">${ic('grid', 'icon--lg')}</span>`}${c.show_on_home === false ? chip(['off', 'Not on home page']) : ''}</div>
      <div class="tile__body"><span class="tile__name">${esc(c.name)}</span><span class="tile__meta">${count(c.id)} products</span></div></a>`).join('')}</div>` : '',
    empty: `${ic('grid')}<p>No collections yet.</p>`,
  });
};
VIEWS.editorial = async id => {
  if (id) return editEntry('editorial', id);
  const list = values('editorial').slice().sort(byOrder);
  listPage('editorial', {
    crumbs: [['Editorial', '#editorial']], title: 'Editorial', newLabel: 'Write a story',
    sub: 'Stories under Highlights → Editorial. Order 1 is the featured story.',
    tiles: list.length ? `<div class="tiles tiles--wide">${list.map(s => `<a class="card tile" href="#editorial/${encodeURIComponent(s.slug)}">
      <div class="tile__media tile__media--wide">${s.hero ? imgTag(s.hero, s.hero_alt) : `<span class="tile__ph">${ic('pen', 'icon--lg')}</span>`}${s.show === false ? chip(['hidden', 'Hidden']) : ''}</div>
      <div class="tile__body"><span class="tile__name">${esc(plain(s.title))}</span><span class="tile__meta">${esc(s.category || '')}${s.date ? ' · ' + esc(fmtDate(s.date)) : ''}</span></div></a>`).join('')}</div>` : '',
    empty: `${ic('pen')}<p>No stories yet.</p>`,
  });
};
VIEWS.brochures = async id => {
  if (id) return editEntry('brochures', id);
  const home = S.data.home.value;
  const on = new Set(Array.isArray(home.builtin_brochures) ? home.builtin_brochures : BUILTIN_BROCHURES.map(b => b.id));
  const list = values('brochures').slice().sort(byOrder);
  listPage('brochures', {
    crumbs: [['e-Brochures', '#brochures']], title: 'e-Brochures', newLabel: 'New e-brochure',
    sub: 'Upload a brochure as page images and it appears on the e-Brochure shelf with a page-turning reader.',
    tiles: `${list.length ? `<div class="tiles" style="margin-bottom:28px">${list.map(b => `<a class="card tile" href="#brochures/${encodeURIComponent(b.slug)}">
      <div class="tile__media">${b.cover || (b.pages && b.pages[0]) ? imgTag(b.cover || b.pages[0].image, b.title) : `<span class="tile__ph">${ic('book', 'icon--lg')}</span>`}${b.show === false ? chip(['hidden', 'Hidden']) : ''}</div>
      <div class="tile__body"><span class="tile__name">${esc(plain(b.title))}</span><span class="tile__meta">${(b.pages || []).length} pages</span></div></a>`).join('')}</div>`
      : `<div class="card empty" style="margin-bottom:28px">${ic('book')}<p>No uploaded brochures yet.</p><a class="btn btn--primary" href="#brochures/new">${ic('plus')}New e-brochure</a></div>`}
      <section class="card"><div class="card__head"><div><h2 class="card__title">Designed brochures</h2><p class="hint">Built into the website. Choose which appear on the shelf.</p></div><button type="button" class="btn btn--primary btn--sm" data-save-builtin disabled>Save</button></div>
      <div class="card__body"><div class="tiles">${BUILTIN_BROCHURES.map(b => `<label class="card tile" style="cursor:pointer"><div class="tile__media">${imgTag(b.cover, b.title)}</div>
        <div class="tile__body"><span class="tile__name">${esc(b.title)}</span><span class="tile__meta">${b.pages} pages</span>
        <span class="switch" style="margin-top:.5rem"><input type="checkbox" data-builtin="${b.id}" ${on.has(b.id) ? 'checked' : ''}><span class="switch__track"></span><span class="small">On the shelf</span></span></div></label>`).join('')}</div></div></section>`,
  });
  const btn = $('[data-save-builtin]');
  $('#content').addEventListener('change', e => { if (e.target.dataset.builtin) { btn.disabled = false; S.dirty = true; } });
  btn.addEventListener('click', async () => {
    const ids = $$('[data-builtin]').filter(x => x.checked).map(x => x.dataset.builtin);
    const value = { ...clone(S.data.home.value), builtin_brochures: ids };
    busy(btn, true);
    try { await commitEntry('home', '', value, { message: `Home page: designed brochures on the shelf (${ids.length})` }); S.dirty = false; btn.disabled = true; }
    catch (e) { handleError(e); }
    finally { busy(btn, false); btn.disabled = !S.dirty; }
  });
};

// ------------------------------------------------------------------ editor page
function editEntry(kind, id) {
  const schema = SCHEMAS[kind];
  const isNew = id === 'new' || id.startsWith('new?');
  let value, loadedSha = null, key = '';
  if (isNew) {
    const copyOf = new URLSearchParams(id.split('?')[1] || '').get('copy');
    value = schema.blank();
    if (copyOf && S.data[kind][copyOf]) { value = clone(S.data[kind][copyOf].value); value.title = value.title ? `${plain(value.title)} copy` : ''; value[schema.key] = slugify(value.title); if (kind === 'campaigns') value.active = false; }
  } else {
    const k = S.data[kind][id] ? id : (entries(kind).find(x => String(x.value[schema.key]) === id) || {}).key;
    if (!k) { toast('That item no longer exists.', 'error'); return go('#' + kind); }
    const e = S.data[kind][k];
    value = clone(e.value); loadedSha = e.sha; key = k;
  }
  S.draft = { kind, key, isNew, value, loadedSha, errors: {} };
  S.ui = { schema, sum: new Map(), open: new Set(), customLinks: new Set(),
    autoKey: isNew ? { from: kind === 'products' ? 'name' : 'title', to: schema.key, make: kind === 'products' ? (() => getAt(S.draft.value, 'id')) : slugify, touched: kind === 'products' } : null };
  if (kind === 'editorial' && isNew) S.ui.open.add('body.0');
  S.ui.render = () => renderEditor();
  renderEditor();
}
function editorTitle(d) {
  const v = d.value;
  if (d.kind === 'home') return 'Home page';
  if (d.kind === 'products') return v.name || 'New product';
  return plain(v.title || v.name) || (d.isNew ? `New ${SCHEMAS[d.kind].label.toLowerCase()}` : '');
}
function siteLinkFor(d) {
  if (d.isNew) return '';
  const v = d.value;
  if (d.kind === 'campaigns') return SITE + '?campaign=' + encodeURIComponent(d.key);
  if (d.kind === 'products') return SITE + '#product-' + encodeURIComponent(d.key);
  if (d.kind === 'editorial') return SITE + '#story-' + encodeURIComponent(d.key);
  if (d.kind === 'brochures') return SITE + '#brochure-' + encodeURIComponent(d.key);
  if (d.kind === 'collections') return SITE + '#collection-' + encodeURIComponent(d.key);
  return SITE;
}
function renderEditor() {
  const d = S.draft, schema = SCHEMAS[d.kind];
  const listHash = d.kind === 'home' ? '#overview' : '#' + d.kind;
  const crumbs = d.kind === 'home' ? [['Home page', '#home']] : [[schema.plural, listHash], [editorTitle(d) || '…', '']];
  const status = d.kind === 'campaigns' && !d.isNew ? chip(campaignStatus(d.value)) : (d.value.show === false ? chip(['hidden', 'Hidden on the website']) : '');
  const link = siteLinkFor(d);
  const saveState = `<div class="savebox__state ${S.dirty ? 'is-dirty' : ''}" data-savestate><span class="dot"></span><span>${S.dirty ? 'Unsaved changes' : d.isNew ? 'Not saved yet' : 'All changes saved'}</span></div>`;
  const saveBtn = (cls = '') => `<button type="button" class="btn btn--primary ${cls}" data-save ${S.dirty || d.isNew ? '' : 'disabled'}>${ic('check')}${d.isNew ? 'Create' : 'Save'}</button>`;
  shell(d.kind === 'home' ? 'home' : d.kind, crumbs, `
    <div class="page-head"><div><h1 class="page-title">${esc(editorTitle(d))}</h1>${status ? `<div style="margin-top:.6rem">${status}</div>` : ''}</div>
      <div class="page-actions">${link ? `<a class="btn" href="${esc(link)}" target="_blank" rel="noopener">${ic('external')}${d.kind === 'campaigns' ? 'Preview on website' : 'View on website'}</a>` : ''}</div></div>
    <div class="editor" data-editor>
      <div class="editor__main">${schema.sections.map(sec => `<section class="card section"><div class="section__head"><div><h2 class="section__title">${esc(sec.title)}</h2>${sec.hint ? `<p class="section__hint">${esc(sec.hint)}</p>` : ''}</div></div>
        <div class="section__body">${fieldsHTML(sec.fields, '', d.value)}</div></section>`).join('')}
        ${!d.isNew && d.kind !== 'home' ? `<section class="card card__body"><h2 class="card__title">Danger zone</h2><p class="hint" style="margin:.3rem 0 .8rem">Deleting removes it from the website. Its pictures stay in the media library.</p>
          <div class="page-actions">${['campaigns', 'brochures', 'editorial'].includes(d.kind) ? `<a class="btn" href="#${d.kind}/new?copy=${encodeURIComponent(d.key)}">${ic('copy')}Duplicate</a>` : ''}<button type="button" class="btn btn--danger" data-delete>${ic('trash')}Delete ${esc(schema.label.toLowerCase())}</button></div></section>` : ''}
      </div>
      <aside class="editor__side"><div class="card savebox">${saveState}${saveBtn('btn--block btn--wide')}
        <div class="progress" hidden data-progress><i></i></div>
        <p class="hint">Saving publishes to the website; it shows there about a minute later.</p>
        ${link ? `<div class="savebox__links"><a href="${esc(link)}" target="_blank" rel="noopener">${ic('external')}${d.kind === 'campaigns' ? 'Preview on website' : 'View on website'}</a></div>` : ''}
        ${d.kind === 'campaigns' ? `<p class="hint">Preview shows the last saved version, even before its start date.</p>` : ''}</div></aside>
    </div>
    <div class="mobilebar">${saveState}${saveBtn()}</div>`);
  const root = $('[data-editor]').parentElement;
  bindEditor(root);
  $$('[data-save]').forEach(b => b.addEventListener('click', () => saveDraft(b)));
  const del = $('[data-delete]'); if (del) del.addEventListener('click', () => deleteDraft(del));
  if (S.dirty) markDirty();
}

// ------------------------------------------------------------------ saving
const LABEL = { campaigns: 'Campaign', products: 'Product', collections: 'Collection', editorial: 'Story', brochures: 'e-Brochure', home: 'Home page' };
const signature = () => `\n\nSaved in Yi Xing Studio by ${S.session.user.name || S.session.user.email}`;
// write one entry (plus its new uploads and any other entries that change with it) in a single commit
async function commitEntry(kind, key, value, { oldKey = null, also = [], message, onProgress } = {}) {
  const path = pathFor(kind, key);
  const changes = [{ path, data: jsonFile(value) }];
  if (oldKey != null && oldKey !== key) changes.push({ path: pathFor(kind, oldKey), data: null });
  for (const o of also) changes.push({ path: pathFor(o.kind, o.key), data: jsonFile(o.value) });
  const uploads = await pendingChanges([value, ...also.map(o => o.value)]);
  changes.push(...uploads);
  await GH.commit(changes, message + signature(), onProgress);
  const store = async (k, ky, v) => {
    const p = pathFor(k, ky), sha = await gitBlobSha(enc.encode(jsonFile(v)));
    if (k === 'home') S.data.home = { path: p, sha, value: v }; else S.data[k][ky] = { path: p, sha, value: v };
  };
  if (oldKey != null && oldKey !== key && kind !== 'home') delete S.data[kind][oldKey];
  await store(kind, key, value);
  for (const o of also) await store(o.kind, o.key, o.value);
  settlePending(uploads.map(u => u.path));
  Publish.watch({ test: siteHas(kind, key, value) });
  toast('Saved. The website shows it in about a minute.');
}
async function saveDraft(btn) {
  const d = S.draft, schema = SCHEMAS[d.kind];
  d.errors = validate(schema, d.value);
  const key = schema.key ? String(getAt(d.value, schema.key) || '').trim() : '';
  if (schema.key && key && key !== d.key && S.data[d.kind][key]) d.errors[schema.key] = `Another ${schema.label.toLowerCase()} already uses “${key}”.`;
  if (Object.keys(d.errors).length) {
    // open any closed list item holding an error, then show the first one
    Object.keys(d.errors).forEach(p => { const m = /^(.*\.\d+)\./.exec(p); if (m) S.ui.open.add(m[1]); });
    rerender();
    const first = $('.field.has-error'); if (first) { first.scrollIntoView({ behavior: 'smooth', block: 'center' }); const i = first.querySelector('input,select,textarea'); if (i) i.focus({ preventScroll: true }); }
    toast('Please check the highlighted fields.', 'error', 5000);
    return;
  }
  const value = tidy(clone(d.value));
  if (schema.key) value[schema.key] = key;
  // someone else changed it in the meantime?
  if (!d.isNew) {
    try {
      const now = await GH.file(pathFor(d.kind, d.key));
      if (now && d.loadedSha && now.sha !== d.loadedSha && !(await ask('Changed by someone else', 'This was saved by someone else after you opened it. Save your version over theirs?', 'Save mine', { danger: true }))) return;
    } catch (e) { if (e.code === 'auth') return handleError(e); }
  }
  const renamed = !d.isNew && d.kind !== 'home' && key !== d.key;
  const also = renamed ? renameRefs(d.kind, d.key, key) : [];
  const prog = $('[data-progress]');
  $$('[data-save]').forEach(b => busy(b, true, pendingIn(value).length ? 'Uploading…' : 'Saving…'));
  if (prog) prog.hidden = false;
  try {
    await commitEntry(d.kind, key, value, {
      oldKey: renamed ? d.key : null, also,
      message: `${LABEL[d.kind]}: ${d.kind === 'home' ? 'settings' : titleOf(d.kind, value)} (${d.isNew ? 'new' : renamed ? 'renamed' : 'updated'})`,
      onProgress: f => { if (prog) prog.firstElementChild.style.width = Math.round(f * 100) + '%'; },
    });
    const wasNew = d.isNew;
    S.draft = { kind: d.kind, key, isNew: false, value: clone(value), loadedSha: (S.data[d.kind][key] || S.data.home).sha, errors: {} };
    S.dirty = false; S.ui.autoKey = null;
    if (d.kind !== 'home' && (wasNew || renamed)) history.replaceState(null, '', `#${d.kind}/${encodeURIComponent(key)}`);
    renderEditor();
  } catch (e) {
    $$('[data-save]').forEach(b => busy(b, false));
    if (prog) prog.hidden = true;
    if (e.code === 'perm') toast('GitHub refused the save: the access key can’t write to the website. The owner can check it under Settings.', 'error');
    else handleError(e);
  }
}

// other entries that point at a renamed product, story, collection or brochure
function renameRefs(kind, oldKey, newKey) {
  const prefix = { products: '#product-', editorial: '#story-', collections: '#collection-', brochures: '#brochure-' }[kind];
  const changed = [];
  const visit = (k, ky, v) => {
    const before = canon(v), nv = clone(v);
    const swapLinks = o => { for (const [kk, x] of Object.entries(o)) { if (typeof x === 'string' && prefix && x === prefix + oldKey) o[kk] = prefix + newKey; else if (x && typeof x === 'object') swapLinks(x); } };
    swapLinks(nv);
    if (kind === 'products') {
      if (k === 'campaigns' && nv.products && Array.isArray(nv.products.items)) nv.products.items = nv.products.items.map(x => (String(x) === oldKey ? newKey : x));
      if (k === 'editorial' && Array.isArray(nv.body)) nv.body.forEach(b => { if (b && b.type === 'products' && Array.isArray(b.items)) b.items = b.items.map(x => (String(x) === oldKey ? newKey : x)); });
      if (k === 'brochures' && Array.isArray(nv.pages)) nv.pages.forEach(pg => { if (pg && String(pg.product) === oldKey) pg.product = newKey; });
    }
    if (kind === 'editorial' && k === 'campaigns' && nv.editorial && nv.editorial.story === oldKey) nv.editorial.story = newKey;
    if (kind === 'collections' && k === 'products' && nv.collection === oldKey) nv.collection = newKey;
    if (canon(nv) !== before) changed.push({ kind: k, key: ky, value: nv });
  };
  for (const k of KINDS) for (const e of entries(k)) if (!(k === kind && e.key === oldKey)) visit(k, e.key, e.value);
  visit('home', '', S.data.home.value);
  return changed;
}
// after deleting: take a product or story out of the lists that use it
function removeRefs(kind, key) {
  const changed = [];
  for (const k of KINDS) for (const e of entries(k)) {
    if (k === kind && e.key === key) continue;
    const nv = clone(e.value), before = canon(nv);
    if (kind === 'products') {
      if (k === 'campaigns' && nv.products && Array.isArray(nv.products.items)) nv.products.items = nv.products.items.filter(x => String(x) !== key);
      if (k === 'editorial' && Array.isArray(nv.body)) nv.body.forEach(b => { if (b && b.type === 'products' && Array.isArray(b.items)) b.items = b.items.filter(x => String(x) !== key); });
      if (k === 'brochures' && Array.isArray(nv.pages)) nv.pages.forEach(pg => { if (pg && String(pg.product) === key) delete pg.product; });
    }
    if (kind === 'editorial' && k === 'campaigns' && nv.editorial && nv.editorial.story === key) delete nv.editorial.story;
    if (canon(nv) !== before) changed.push({ kind: k, key: e.key, value: nv });
  }
  return changed;
}
async function deleteDraft(btn) {
  const d = S.draft, schema = SCHEMAS[d.kind], name = editorTitle(d);
  if (d.kind === 'collections') {
    const n = values('products').filter(p => p.collection === d.key).length;
    if (n) return tell('Collection in use', `${n} product${n > 1 ? 's are' : ' is'} in “${esc(name)}”. Move ${n > 1 ? 'them' : 'it'} to another collection first.`);
  }
  if (d.kind === 'campaigns' && liveCampaign() && liveCampaign().slug === d.key && !(await ask('This campaign is live', 'It is on the home page right now. Deleting it brings back the default banner (or the next live campaign).', 'Continue'))) return;
  const also = removeRefs(d.kind, d.key);
  const extra = also.length ? `<br><br>It’s also used in: ${also.map(o => esc(o.kind === 'home' ? 'Home page' : titleOf(o.kind, o.value))).join(', ')}. It will be taken out of those too.` : '';
  if (!(await ask(`Delete “${name}”?`, `This removes it from the website. You can’t undo this here.${extra}`, 'Delete', { danger: true }))) return;
  busy(btn, true, 'Deleting…');
  try {
    const changes = [{ path: pathFor(d.kind, d.key), data: null }, ...also.map(o => ({ path: pathFor(o.kind, o.key), data: jsonFile(o.value) }))];
    await GH.commit(changes, `${LABEL[d.kind]}: ${name} (deleted)` + signature());
    delete S.data[d.kind][d.key];
    for (const o of also) S.data[o.kind][o.key] = { path: pathFor(o.kind, o.key), sha: await gitBlobSha(enc.encode(jsonFile(o.value))), value: o.value };
    Publish.watch({ test: siteHas(d.kind, d.key, null) });
    toast(`Deleted “${name}”.`);
    goNoGuard('#' + d.kind);
  } catch (e) { busy(btn, false); handleError(e); }
}

// ------------------------------------------------------------------ home page settings
VIEWS.home = async () => {
  const h = S.data.home;
  S.draft = { kind: 'home', key: '', isNew: false, value: clone(h.value || {}), loadedSha: h.sha, errors: {} };
  S.ui = { schema: SCHEMAS.home, sum: new Map(), open: new Set(), customLinks: new Set(), render: () => renderEditor() };
  renderEditor();
};

// ------------------------------------------------------------------ media library
VIEWS.media = async () => {
  const f = S.ui.mf || (S.ui.mf = { tab: 'uploads', q: '', sel: '' });
  S.ui = { mf: f };
  shell('media', [['Media library', '#media']], `
    <div class="page-head"><div><h1 class="page-title">Media library</h1><p class="page-sub">Every picture and video on the website. Upload here to use them anywhere, or upload straight from a campaign, product or brochure. Photos are resized and compressed for you.</p></div>
      <div class="page-actions"><label class="btn btn--primary filebtn">${ic('upload')}Upload files<input type="file" multiple accept="image/*,video/mp4,video/webm" data-media-upload></label></div></div>
    <div class="toolbar"><div class="search">${ic('search')}<input class="input" type="search" placeholder="Search by file name" value="${esc(f.q)}" data-q aria-label="Search media"></div>
      <div class="filters" role="group" aria-label="Show">${[['uploads', 'Uploads'], ['site', 'Website images'], ['videos', 'Videos']].map(([k, l]) => `<button type="button" class="filter" data-tab="${k}" aria-pressed="${f.tab === k}">${l}</button>`).join('')}</div></div>
    <div class="progress" hidden data-progress style="margin-bottom:12px"><i></i></div>
    <div class="media-layout" data-drop-media><div class="media-grid" data-grid></div><aside class="card media-panel" data-panel></aside></div>`);
  const list = () => S.media.filter(m => (f.tab === 'videos' ? isVideo(m.path) : isImage(m.path) && (f.tab === 'uploads' ? m.path.startsWith('media/uploads/') : !m.path.startsWith('media/uploads/'))))
    .filter(m => !f.q || m.path.toLowerCase().includes(f.q));
  const draw = () => {
    const l = list();
    $('[data-grid]').innerHTML = l.length ? l.map(m => `<button type="button" data-pick="${esc(m.path)}" aria-pressed="${f.sel === m.path}"><span class="lib__img">${isVideo(m.path) ? `<video src="${esc(mediaUrl(m.path))}" muted preload="metadata"></video>` : imgTag(m.path)}</span><span class="lib__name">${esc(basename(m.path))}</span></button>`).join('')
      : `<div class="card empty" style="grid-column:1/-1">${ic('image')}<p>${f.tab === 'uploads' ? 'Nothing uploaded yet. Upload files here, or drop them on this page.' : 'Nothing here.'}</p></div>`;
    panel();
  };
  const panel = () => {
    const el = $('[data-panel]'), m = S.media.find(x => x.path === f.sel);
    if (!m) { el.innerHTML = `<p class="muted small">Select a file to see where it’s used, copy its link or delete it.</p>`; return; }
    const uses = usesOf(m.path), mine = m.path.startsWith('media/uploads/');
    el.innerHTML = `<div class="media-panel__preview">${isVideo(m.path) ? `<video src="${esc(mediaUrl(m.path))}" controls muted playsinline preload="metadata"></video>` : imgTag(m.path)}</div>
      <dl class="kv"><dt>File</dt><dd>${esc(basename(m.path))}</dd><dt>Size</dt><dd>${fmtSize(m.size)}</dd><dt>Used in</dt><dd>${uses.length ? uses.map(u => `<a href="#${u.kind === 'home' ? 'home' : `${u.kind}/${encodeURIComponent(u.key)}`}">${esc(u.label)}</a>`).join('<br>') : 'Not used yet'}</dd></dl>
      <div class="page-actions"><button type="button" class="btn btn--sm" data-copy>${ic('copy')}Copy link</button><a class="btn btn--sm" href="${esc(mediaUrl(m.path))}" target="_blank" rel="noopener">${ic('external')}Open</a>
      ${mine ? `<button type="button" class="btn btn--sm btn--danger" data-del>${ic('trash')}Delete</button>` : ''}</div>
      ${mine ? '' : '<p class="hint">Website images came with the site design and can’t be deleted here.</p>'}`;
    el.querySelector('[data-copy]').onclick = async () => { const url = SITE + encodePath(m.path); try { await navigator.clipboard.writeText(url); toast('Link copied.'); } catch (e) { promptText('Link to this file', 'Copy the link', url); } };
    const del = el.querySelector('[data-del]');
    if (del) del.onclick = async () => {
      if (uses.length) return tell('This file is in use', `Remove it from ${uses.map(u => esc(u.label)).join(', ')} first, then delete it here.`);
      if (!(await ask('Delete this file?', `“${esc(basename(m.path))}” will be removed from the website.`, 'Delete', { danger: true }))) return;
      busy(del, true, 'Deleting…');
      try { await GH.commit([{ path: m.path, data: null }], `Media: ${basename(m.path)} (deleted)` + signature()); S.files.delete(m.path); refreshMedia(); f.sel = ''; toast('File deleted.'); draw(); }
      catch (e) { busy(del, false); handleError(e); }
    };
  };
  const upload = async files => {
    if (!files || !files.length) return;
    const prog = $('[data-progress]'); prog.hidden = false; prog.firstElementChild.style.width = '5%';
    try {
      const imgs = [...files].filter(x => !/^video\//.test(x.type)), vids = [...files].filter(x => /^video\//.test(x.type));
      const paths = [...(await addFiles(imgs, { folder: 'images', ftype: 'image', max: [2400, 2400] })), ...(await addFiles(vids, { folder: 'videos', ftype: 'video' }))];
      if (!paths.length) { prog.hidden = true; return; }
      const changes = await Promise.all(paths.map(async p => ({ path: p, data: new Uint8Array(await S.pending.get(p).blob.arrayBuffer()) })));
      await GH.commit(changes, `Media: ${paths.length} file${paths.length > 1 ? 's' : ''} uploaded` + signature(), x => { prog.firstElementChild.style.width = Math.round(5 + x * 95) + '%'; });
      settlePending(paths);
      f.tab = vids.length && !imgs.length ? 'videos' : 'uploads'; f.sel = paths[0];
      Publish.watch({ test: siteHasFile(paths[paths.length - 1]) });
      toast(`${paths.length} file${paths.length > 1 ? 's' : ''} uploaded.`);
      VIEWS.media();
    } catch (e) { clearPending(); prog.hidden = true; handleError(e); }
  };
  draw();
  $('[data-q]').addEventListener('input', e => { f.q = e.target.value.trim().toLowerCase(); draw(); });
  $('.filters').addEventListener('click', e => { const b = e.target.closest('[data-tab]'); if (!b) return; f.tab = b.dataset.tab; $$('.filters [data-tab]').forEach(x => x.setAttribute('aria-pressed', String(x === b))); draw(); });
  $('[data-grid]').addEventListener('click', e => { const b = e.target.closest('[data-pick]'); if (!b) return; f.sel = b.dataset.pick; $$('[data-grid] [data-pick]').forEach(x => x.setAttribute('aria-pressed', String(x === b))); panel(); });
  $('[data-media-upload]').addEventListener('change', e => { upload(e.target.files); e.target.value = ''; });
  const zone = $('[data-drop-media]');
  zone.addEventListener('dragover', e => { if ([...e.dataTransfer.types].includes('Files')) e.preventDefault(); });
  zone.addEventListener('drop', e => { if (e.dataTransfer.files.length) { e.preventDefault(); upload(e.dataTransfer.files); } });
};

// ------------------------------------------------------------------ access.json changes (team, passwords, access key)
async function readAccess() {
  const f = await GH.file(ACCESS_PATH);
  if (!f) throw new Error('The sign-in file is missing.');
  return JSON.parse(dec.decode(f.bytes));
}
async function saveAccess(mutate, message) {
  const access = await readAccess();
  await mutate(access);
  access.updated = new Date().toISOString();
  await GH.commit([{ path: ACCESS_PATH, data: jsonFile(access) }], `Studio: ${message}` + signature());
  S.access = access;
  return access;
}
function passwordFields(prefix, email = '') {
  return `<div class="field"><label class="label" for="${prefix}1">New password</label><div class="pw"><input class="input" id="${prefix}1" type="password" autocomplete="new-password" minlength="${MIN_PASSWORD}" data-meter="${prefix}m" data-email="${esc(email)}"><button type="button" data-peek aria-label="Show password">${ic('eye')}</button></div>
      <div class="meter" id="${prefix}m" data-score="0"><i></i><i></i><i></i><i></i></div><p class="hint">At least ${MIN_PASSWORD} characters. A short sentence is easy to remember and hard to guess.</p></div>
    <div class="field"><label class="label" for="${prefix}2">Type it again</label><input class="input" id="${prefix}2" type="password" autocomplete="new-password"></div>`;
}
document.addEventListener('input', e => {
  const el = e.target;
  if (el.dataset && el.dataset.meter) { const m = document.getElementById(el.dataset.meter); if (m) m.dataset.score = el.value ? passwordScore(el.value, el.dataset.email) : 0; }
});
document.addEventListener('click', e => {
  const b = e.target.closest('[data-peek]'); if (!b) return;
  const i = b.parentElement.querySelector('input'); const show = i.type === 'password';
  i.type = show ? 'text' : 'password'; b.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
});
function checkNewPassword(root, prefix, email) {
  const a = root.querySelector('#' + prefix + '1').value, b = root.querySelector('#' + prefix + '2').value;
  const p = passwordProblem(a, email);
  if (p) return p;
  if (a !== b) return 'The two passwords are different.';
  return '';
}

// ------------------------------------------------------------------ team (owner only)
VIEWS.team = async () => {
  if (!isOwner()) return go('#overview');
  shell('team', [['Team', '#team']], `<div class="page-head"><div><h1 class="page-title">Team</h1><p class="page-sub">People who can sign in to the Studio. Editors can change everything on the website; owners can also manage the team and the GitHub access key.</p></div>
    <div class="page-actions"><button type="button" class="btn btn--primary" data-add>${ic('plus')}Add a person</button></div></div><section class="card" data-team><div class="card__body muted">Loading…</div></section>`);
  let access, people;
  try { access = await readAccess(); people = await Keyring.profiles(access, S.session.vault); }
  catch (e) { $('[data-team]').innerHTML = `<div class="card__body">Couldn’t load the team: ${esc(e.message)}</div>`; return; }
  const me = S.session.user.id;
  $('[data-team]').innerHTML = `<div class="table-wrap"><table class="table"><thead><tr><th>Name</th><th>Email</th><th>Role</th><th></th></tr></thead><tbody>
    ${people.map(p => `<tr><td><div class="who"><span class="who__avatar">${esc(initials(p.name || p.email))}</span><span>${esc(p.name || '—')}${p.id === me ? ' <span class="chip">You</span>' : ''}${p.mustChange ? ' <span class="chip chip--soon">Temporary password</span>' : ''}</span></div></td>
      <td>${esc(p.email)}</td><td>${p.role === 'owner' ? 'Owner' : 'Editor'}</td>
      <td style="text-align:right;white-space:nowrap">${p.id === me ? '' : `<button type="button" class="btn btn--sm" data-reset="${p.id}">Reset password</button> <button type="button" class="btn btn--sm btn--danger" data-remove="${p.id}">Remove</button>`}</td></tr>`).join('')}
    </tbody></table></div>`;
  const show = (title, text, pw) => modal({ title, body: `<p>${text}</p><div class="inline"><input class="input input--mono" readonly value="${esc(pw)}" aria-label="Temporary password"><button type="button" class="btn" data-cp>${ic('copy')}Copy</button></div><p class="hint">They sign in at ${esc(location.origin + location.pathname)} and choose their own password straight away. This is the only time it is shown.</p>`,
    actions: [{ label: 'Done', primary: true, value: true }],
    onOpen(w) { w.querySelector('[data-cp]').onclick = async () => { try { await navigator.clipboard.writeText(pw); toast('Copied.'); } catch (e) { w.querySelector('input').select(); } }; } });
  $('[data-add]').onclick = async () => {
    const r = await modal({
      title: 'Add a person', body: `<div class="field"><label class="label" for="tn">Name</label><input class="input" id="tn" type="text" autocomplete="off"></div>
        <div class="field"><label class="label" for="te">Email</label><input class="input" id="te" type="email" autocomplete="off"></div>
        <div class="field"><label class="label" for="tr">Role</label><select class="select" id="tr"><option value="editor">Editor: changes the website</option><option value="owner">Owner: also manages the team</option></select></div>
        <div class="field"><label class="label" for="tp">Temporary password</label><input class="input input--mono" id="tp" type="text" value="${esc(strongPassword())}" autocomplete="off"><p class="hint">They’ll choose their own password the first time they sign in.</p></div><p class="error" data-e hidden></p>`,
      actions: [{ label: 'Cancel', value: false, closeOnFalse: true }, { label: 'Add person', primary: true, value: w => {
        const v = { name: w.querySelector('#tn').value.trim(), email: w.querySelector('#te').value.trim().toLowerCase(), role: w.querySelector('#tr').value, pw: w.querySelector('#tp').value };
        const err = !v.name ? 'Add their name.' : !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.email) ? 'Add a valid email address.' : passwordProblem(v.pw, v.email);
        if (err) { const e = w.querySelector('[data-e]'); e.textContent = err; e.hidden = false; return false; }
        return v;
      } }],
    });
    if (!r) return;
    try {
      const id = await Keyring.idFor(r.email);
      await saveAccess(async a => {
        if (a.users.some(u => u.id === id)) throw new Error('That email already has a login.');
        a.users.push(await Keyring.makeUser(S.session.vault, { email: r.email, name: r.name, role: r.role, mustChange: true }, r.pw));
      }, `added ${r.name}`);
      await show('Person added', `Send ${esc(r.name)} this temporary password, for example on WhatsApp:`, r.pw);
      VIEWS.team();
    } catch (e) { handleError(e); }
  };
  $('[data-team]').addEventListener('click', async e => {
    const rid = e.target.closest('[data-reset]')?.dataset.reset, xid = e.target.closest('[data-remove]')?.dataset.remove;
    const p = people.find(x => x.id === (rid || xid)); if (!p) return;
    try {
      if (rid) {
        if (!(await ask('Reset password?', `${esc(p.name || p.email)} gets a temporary password and chooses a new one when they next sign in.`, 'Reset'))) return;
        const pw = strongPassword();
        await saveAccess(async a => { const i = a.users.findIndex(u => u.id === p.id); if (i < 0) throw new Error('That person is no longer on the team.'); a.users[i] = await Keyring.makeUser(S.session.vault, { ...p, mustChange: true }, pw); }, `reset ${p.name || 'a'} password`);
        await show('Password reset', `Send ${esc(p.name || p.email)} this temporary password:`, pw);
      } else {
        if (!(await ask('Remove from the team?', `${esc(p.name || p.email)} won’t be able to sign in any more. If they might still have the access key saved, renew the key under Settings too.`, 'Remove', { danger: true }))) return;
        await saveAccess(a => { a.users = a.users.filter(u => u.id !== p.id); if (!a.users.length) throw new Error('The team needs at least one person.'); }, `removed ${p.name || 'a person'}`);
        toast('Removed.');
      }
      VIEWS.team();
    } catch (err) { handleError(err); }
  });
};

// ------------------------------------------------------------------ settings
VIEWS.settings = async () => {
  const u = S.session.user;
  shell('settings', [['Settings', '#settings']], `<div class="page-head"><div><h1 class="page-title">Settings</h1></div></div>
    <div style="display:grid;gap:18px;max-width:760px">
      <section class="card"><div class="card__head"><h2 class="card__title">Your details</h2></div><form class="card__body" data-me style="display:grid;gap:14px">
        <div class="field"><label class="label" for="sn">Name</label><input class="input" id="sn" type="text" value="${esc(u.name || '')}"></div>
        <div class="field"><span class="label">Email</span><p>${esc(u.email)}</p><p class="hint">To change your email, ask an owner to add your new address and remove the old one.</p></div>
        <div><button class="btn btn--primary" type="submit">Save name</button></div></form></section>
      <section class="card"><div class="card__head"><h2 class="card__title">Change your password</h2></div><form class="card__body" data-pw style="display:grid;gap:14px" autocomplete="off">
        <div class="field"><label class="label" for="cp0">Current password</label><input class="input" id="cp0" type="password" autocomplete="current-password"></div>
        ${passwordFields('cp', u.email)}<p class="error" data-e hidden></p>
        <div><button class="btn btn--primary" type="submit">Change password</button></div></form></section>
      ${isOwner() ? `<section class="card"><div class="card__head"><h2 class="card__title">GitHub access key</h2><span data-keystate class="chip">Checking…</span></div><div class="card__body" style="display:grid;gap:12px">
        <p class="muted">The Studio saves to the website through a GitHub access key, locked inside the sign-in file with everyone’s passwords. Renew it if it stops working, or if someone who left might still have it.</p>
        <div><button type="button" class="btn" data-renew>${ic('key')}Replace the access key</button></div></div></section>` : ''}
      <section class="card card__body"><h2 class="card__title">Sign out</h2><p class="hint" style="margin:.3rem 0 .8rem">Signs you out on this device.</p><button type="button" class="btn" data-signout>${ic('logout')}Sign out</button></section>
    </div>`);
  $('[data-me]').onsubmit = async e => {
    e.preventDefault(); const btn = e.submitter || e.target.querySelector('button');
    const name = $('#sn').value.trim(); if (!name) return toast('Add your name.', 'error');
    busy(btn, true);
    try {
      await saveAccess(async a => { const i = a.users.findIndex(x => x.id === u.id); a.users[i].profile = await Keyring.sealJSON(S.session.vault, { email: u.email, name, role: u.role, mustChange: false, added: u.added }); }, 'updated a name');
      S.session.user.name = name; persistSession(); toast('Saved.'); VIEWS.settings();
    } catch (err) { handleError(err); } finally { busy(btn, false); }
  };
  $('[data-pw]').onsubmit = async e => {
    e.preventDefault(); const form = e.target, btn = form.querySelector('button[type=submit]'), errEl = form.querySelector('[data-e]');
    const problem = checkNewPassword(form, 'cp', u.email);
    if (problem) { errEl.textContent = problem; errEl.hidden = false; return; }
    errEl.hidden = true; busy(btn, true, 'Changing…');
    try {
      const access = await readAccess();
      await Keyring.unlock(access, u.email, $('#cp0').value);       // proves the current password
      await saveAccess(async a => { const i = a.users.findIndex(x => x.id === u.id); a.users[i] = await Keyring.makeUser(S.session.vault, { ...u, mustChange: false }, $('#cp1').value); }, 'changed a password');
      form.reset(); toast('Password changed.');
    } catch (err) { if (/match/.test(err.message)) { errEl.textContent = 'Your current password isn’t right.'; errEl.hidden = false; } else handleError(err); }
    finally { busy(btn, false); }
  };
  if (isOwner()) {
    GH.req(GH.repo()).then(() => { const c = $('[data-keystate]'); if (c) { c.className = 'chip chip--live'; c.textContent = 'Working'; } })
      .catch(err => { const c = $('[data-keystate]'); if (c) { c.className = 'chip chip--hidden'; c.textContent = err.code === 'auth' ? 'Not working' : 'Couldn’t check'; } });
    $('[data-renew]').onclick = () => renewKey(false);
  }
};
// replace the GitHub access key inside the sign-in file (keeps everyone’s logins)
async function renewKey(fromSignIn) {
  const token = await modal({
    title: 'Replace the access key',
    body: `<ol class="steps"><li><span><a href="${TOKEN_URL}" target="_blank" rel="noopener">Open GitHub’s access-key page</a> while signed in as <b>yixinggoldsmith</b>. The name and permission are filled in.</span></li>
      <li><span>Under <b>Repository access</b> choose <b>Only select repositories</b> → <b>yixinggoldsmith.github.io</b>. Press <b>Generate token</b> and copy it.</span></li>
      <li><span>Paste it here. You can then delete the old key on GitHub.</span></li></ol>
      <div class="field"><label class="label" for="nk">New access key</label><input class="input input--mono" id="nk" type="password" autocomplete="off" placeholder="github_pat_…"></div><p class="error" data-e hidden></p>`,
    actions: [{ label: 'Cancel', value: false, closeOnFalse: true }, { label: 'Use this key', primary: true, value: async w => {
      const t = w.querySelector('#nk').value.trim(), e = w.querySelector('[data-e]');
      const fail = m => { e.textContent = m; e.hidden = false; return false; };
      if (!/^(github_pat_|ghp_)[A-Za-z0-9_]+$/.test(t)) return fail('That doesn’t look like a GitHub access key. It starts with github_pat_.');
      const old = GH.token; GH.token = t;
      try { await GH.req(GH.repo()); } catch (err) { return fail(err.status === 404 ? 'This key can’t see the website. Choose yixinggoldsmith.github.io under Repository access.' : err.message); }
      finally { GH.token = old; }
      return t;
    } }],
  });
  if (!token) return false;
  const previous = GH.token;
  GH.token = token;                                   // the old key may already be dead, so save with the new one
  try {
    await saveAccess(async a => { a.vault = await Keyring.sealJSON(S.session.vault, { token, saved: new Date().toISOString() }); }, 'renewed the GitHub access key');
    S.session.token = token; persistSession(); toast('Access key replaced. You can delete the old one on GitHub.');
    if (!fromSignIn) VIEWS.settings();
    return true;
  } catch (e) {
    GH.token = previous;
    if (e.code === 'perm') toast('That key can read the website but not save to it. Set Contents to “Read and write”.', 'error');
    else handleError(e);
    return false;
  }
}

// ------------------------------------------------------------------ sign-in, first-time setup, sessions
const SKEY = 'yixing-studio-session';
function persistSession(keep) {
  if (!S.session) return;
  const data = JSON.stringify({ token: S.session.token, vault: b64.from(S.session.vault), user: S.session.user });
  try {
    sessionStorage.setItem(SKEY, data);
    if (keep === true) localStorage.setItem(SKEY, data);
    else if (keep === false) localStorage.removeItem(SKEY);
    else if (localStorage.getItem(SKEY)) localStorage.setItem(SKEY, data);   // keep the existing choice
  } catch (e) { /* private window: stays signed in until the tab closes */ }
}
function restoreSession() {
  try {
    const raw = sessionStorage.getItem(SKEY) || localStorage.getItem(SKEY);
    if (!raw) return null;
    const o = JSON.parse(raw);
    return o && o.token && o.vault && o.user ? { token: o.token, vault: b64.to(o.vault), user: o.user } : null;
  } catch (e) { return null; }
}
function forgetSession() { try { sessionStorage.removeItem(SKEY); localStorage.removeItem(SKEY); } catch (e) { /* ignore */ } }
function signOut(expired) {
  forgetSession(); clearPending();
  S.session = null; GH.token = null; S.dirty = false; S.draft = null;
  history.replaceState(null, '', location.pathname + location.search);
  showSignIn(expired ? 'Please sign in again.' : 'You’ve signed out.');
}
async function confirmSignOut() {
  if (S.dirty && !(await ask('Sign out without saving?', 'You have changes that are not saved yet.', 'Sign out', { danger: true }))) return;
  signOut(false);
}

// the sign-in file: from the GitHub API (always current), or the website's copy if the API is busy
async function fetchAccess() {
  try {
    const f = await GH.file(ACCESS_PATH, { auth: false });
    return f ? JSON.parse(dec.decode(f.bytes)) : null;
  } catch (e) {
    const r = await fetch(SITE + ACCESS_PATH + '?v=' + Date.now(), { cache: 'no-store' }).catch(() => null);
    if (r && r.ok) return r.json();
    throw e;
  }
}

const loadingHTML = text => `<div class="loading"><span class="spin"></span><p data-loading>${esc(text)}</p></div>`;
function authShell(inner, wide = false) {
  app().innerHTML = `<div class="auth">
    <section class="auth__brand"><div>${LOGO_SVG}</div>
      <div><h1>Yi Xing <em>Studio</em></h1><p>Campaigns, product photos, e-brochures and stories for the Yi Xing website, in one place. Everything you save goes live on the website.</p></div>
      <p class="small" style="opacity:.75">${esc(new URL(SITE).host)}</p></section>
    <section class="auth__panel"><div class="auth__card ${wide ? 'auth__card--wide' : ''}">${inner}</div></section></div>`;
}

function showSignIn(note) {
  authShell(`<div><h2 class="auth__title">Sign in</h2><p class="auth__sub">Use your Studio email and password.</p></div>
    ${note ? `<div class="auth__msg auth__msg--info">${esc(note)}</div>` : ''}
    <div class="auth__msg" role="alert" hidden data-err></div>
    <form data-signin novalidate style="display:grid;gap:1rem">
      <div class="field"><label class="label" for="em">Email</label><input class="input" id="em" name="email" type="email" autocomplete="username" required></div>
      <div class="field"><label class="label" for="pw">Password</label><div class="pw"><input class="input" id="pw" name="password" type="password" autocomplete="current-password" required><button type="button" data-peek aria-label="Show password">${ic('eye')}</button></div></div>
      <label class="check"><input type="checkbox" id="keep"><span>Keep me signed in on this device<br><span class="hint">Only on your own phone or computer.</span></span></label>
      <button class="btn btn--primary btn--wide btn--block" type="submit">Sign in</button>
    </form>
    <p class="auth__foot"><button type="button" class="linkbtn" data-forgot>Forgot your password?</button></p>`);
  const form = $('[data-signin]'), err = $('[data-err]');
  $('#em').focus();
  form.onsubmit = async e => {
    e.preventDefault();
    const email = $('#em').value.trim(), pw = $('#pw').value, btn = form.querySelector('[type=submit]');
    if (!email || !pw) { err.textContent = 'Enter your email and password.'; err.hidden = false; return; }
    err.hidden = true; busy(btn, true, 'Checking…');
    try {
      const access = await fetchAccess();
      if (!access) return showSetup();
      const ses = await Keyring.unlock(access, email, pw);
      S.access = access;
      await startSession(ses, $('#keep').checked);
    } catch (e2) {
      busy(btn, false);
      err.textContent = e2.message || 'Couldn’t sign in.'; err.hidden = false;
    }
  };
  $('[data-forgot]').onclick = async () => {
    const r = await modal({
      title: 'Forgot your password?',
      body: `<p><b>Staff:</b> ask an owner to reset it under Team. You’ll get a temporary password.</p><p><b>Owner:</b> you can set a new password with a GitHub access key from the yixinggoldsmith account. Other people’s logins then need to be added again under Team.</p>`,
      actions: [{ label: 'Close', value: false, closeOnFalse: true }, { label: 'Reset with an access key', primary: true, value: 'reset' }],
    });
    if (r === 'reset') showSetup(true);
  };
}

// first-time setup, and the owner's reset (same steps; a reset replaces the sign-in file)
function showSetup(reset = false) {
  authShell(`<div><h2 class="auth__title">${reset ? 'Reset the owner login' : 'Set up Yi Xing Studio'}</h2>
      <p class="auth__sub">${reset ? 'Prove you own the website with a GitHub access key, then choose a new password. Other people’s logins will need adding again.' : 'A one-time step for the website’s owner: connect the Studio to the website on GitHub and create your login.'}</p></div>
    <ol class="steps">
      <li><span><a href="${TOKEN_URL}" target="_blank" rel="noopener"><b>Open GitHub’s access-key page</b></a> while signed in to GitHub as <b>yixinggoldsmith</b>. The name and the permission are already filled in.</span></li>
      <li><span>Under <b>Repository access</b>, choose <b>Only select repositories</b> and pick <b>yixinggoldsmith.github.io</b>.</span></li>
      <li><span>Check that <b>Contents</b> says <b>Read and write</b>, press <b>Generate token</b>, and copy the key. It starts with <code>github_pat_</code>.</span></li>
      <li><span>Paste it below and choose your Studio email and password.</span></li>
    </ol>
    <div class="auth__msg" role="alert" hidden data-err></div>
    <form data-setup novalidate style="display:grid;gap:1rem" autocomplete="off">
      <div class="field"><label class="label" for="tk">GitHub access key</label><input class="input input--mono" id="tk" type="password" autocomplete="off" placeholder="github_pat_…" required><p class="hint">It’s locked with your password before it’s saved, so it can’t be read from the website.</p></div>
      <div class="field"><label class="label" for="nm">Your name</label><input class="input" id="nm" type="text" autocomplete="name" required></div>
      <div class="field"><label class="label" for="em">Your email</label><input class="input" id="em" type="email" autocomplete="username" required><p class="hint">This is what you’ll sign in with. It isn’t shown anywhere.</p></div>
      ${passwordFields('np')}
      <button class="btn btn--primary btn--wide btn--block" type="submit">${reset ? 'Reset and sign in' : 'Create my login'}</button>
    </form>
    <p class="auth__foot">${reset ? `<button type="button" class="linkbtn" data-back>Back to sign in</button>` : 'Already set up? Refresh this page to sign in.'}</p>`, true);
  const form = $('[data-setup]'), err = $('[data-err]');
  const back = $('[data-back]'); if (back) back.onclick = () => showSignIn();
  $('#em').addEventListener('input', e => { $('#np1').dataset.email = e.target.value; });
  form.onsubmit = async e => {
    e.preventDefault();
    const token = $('#tk').value.trim(), name = $('#nm').value.trim(), email = $('#em').value.trim().toLowerCase(), btn = form.querySelector('[type=submit]');
    const fail = m => { err.textContent = m; err.hidden = false; busy(btn, false); err.scrollIntoView({ block: 'center', behavior: 'smooth' }); };
    if (!/^(github_pat_|ghp_)[A-Za-z0-9_]+$/.test(token)) return fail('Paste the GitHub access key. It starts with github_pat_.');
    if (!name) return fail('Add your name.');
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return fail('Add a valid email address.');
    const p = checkNewPassword(form, 'np', email); if (p) return fail(p);
    err.hidden = true; busy(btn, true, 'Connecting to GitHub…');
    GH.token = token;
    try { await GH.req(GH.repo()); }
    catch (e2) { GH.token = null; return fail(e2.status === 404 || e2.code === 'perm' ? 'This key can’t see the website. On GitHub, choose Only select repositories → yixinggoldsmith.github.io.' : e2.code === 'auth' ? 'GitHub doesn’t recognise this key. Copy it again, or make a new one.' : e2.message); }
    try {
      const existing = await GH.file(ACCESS_PATH);
      if (existing && !reset) { GH.token = null; return fail('The Studio is already set up. Refresh the page and sign in, or use “Forgot your password?”.'); }
      busy(btn, true, 'Creating your login…');
      const { vault, access } = await Keyring.newAccess(token, { email, name }, $('#np1').value);
      await GH.commit([{ path: ACCESS_PATH, data: jsonFile(access) }], `Studio: ${reset ? 'owner login reset' : 'sign-in set up'}\n\nSaved in Yi Xing Studio by ${name}`);
      S.access = access;
      const user = { id: access.users[0].id, email, name, role: 'owner', mustChange: false };
      await startSession({ token, vault, user }, false);
      toast(reset ? 'New password set. Add your team again under Team.' : 'Your login is ready. Welcome to Yi Xing Studio.');
    } catch (e2) {
      GH.token = null;
      if (e2.code === 'perm' || e2.status === 403) return fail('This key can read the website but not save to it. On GitHub, set Contents to “Read and write”.');
      fail(e2.message);
    }
  };
}

async function startSession(ses, keep) {
  GH.token = ses.token;
  S.session = ses;
  app().innerHTML = loadingHTML('Opening the website’s content…');
  try { await loadAll(t => { const el = $('[data-loading]'); if (el) el.textContent = t; }); }
  catch (e) {
    if (e.code === 'auth' || e.code === 'perm') {
      if (ses.user.role === 'owner') {
        authShell(`<div><h2 class="auth__title">The access key stopped working</h2><p class="auth__sub">GitHub no longer accepts the key the Studio uses to save to the website. It may have expired or been deleted. Make a new one to carry on; everyone’s logins stay the same.</p></div>
          <button type="button" class="btn btn--primary btn--wide" data-renew>${ic('key')}Replace the access key</button><p class="auth__foot"><button type="button" class="linkbtn" data-back>Back to sign in</button></p>`);
        $('[data-back]').onclick = () => { S.session = null; GH.token = null; showSignIn(); };
        $('[data-renew]').onclick = async () => { if (await renewKey(true)) startSession(S.session, keep); };
        return;
      }
      S.session = null; GH.token = null;
      return showSignIn('The website’s GitHub access key has stopped working. Ask the owner to sign in and replace it.');
    }
    S.session = null; GH.token = null;
    throw e;
  }
  persistSession(keep);
  if (ses.user.mustChange) return showMustChange();
  if (!location.hash) history.replaceState(null, '', '#overview');
  route();
}

function showMustChange() {
  const u = S.session.user;
  authShell(`<div><h2 class="auth__title">Choose your password</h2><p class="auth__sub">You signed in with a temporary password. Choose your own to carry on.</p></div>
    <div class="auth__msg" role="alert" hidden data-err></div>
    <form data-must novalidate style="display:grid;gap:1rem">${passwordFields('mp', u.email)}<button class="btn btn--primary btn--wide btn--block" type="submit">Save and continue</button></form>`);
  const form = $('[data-must]'), err = $('[data-err]');
  form.onsubmit = async e => {
    e.preventDefault();
    const btn = form.querySelector('[type=submit]');
    const p = checkNewPassword(form, 'mp', u.email); if (p) { err.textContent = p; err.hidden = false; return; }
    busy(btn, true, 'Saving…');
    try {
      await saveAccess(async a => { const i = a.users.findIndex(x => x.id === u.id); a.users[i] = await Keyring.makeUser(S.session.vault, { ...u, mustChange: false }, $('#mp1').value); }, 'chose a new password');
      S.session.user.mustChange = false; persistSession();
      toast('Password saved.');
      if (!location.hash) history.replaceState(null, '', '#overview');
      route();
    } catch (e2) { busy(btn, false); err.textContent = e2.message; err.hidden = false; }
  };
}

// ------------------------------------------------------------------ start
async function boot() {
  const saved = restoreSession();
  if (saved) {
    S.session = saved; GH.token = saved.token;
    app().innerHTML = loadingHTML('Opening the website’s content…');
    try {
      await loadAll(t => { const el = $('[data-loading]'); if (el) el.textContent = t; });
      if (saved.user.mustChange) return showMustChange();
      if (!location.hash) history.replaceState(null, '', '#overview');
      return route();
    } catch (e) {
      S.session = null; GH.token = null;
      if (e.code === 'auth' || e.code === 'perm') forgetSession();
      else return showSignIn('Couldn’t reach GitHub just now. Check the connection and sign in again.');
    }
  }
  try {
    const access = await fetchAccess();
    if (!access) return showSetup();
    S.access = access;
  } catch (e) { /* sign-in tries again */ }
  showSignIn();
}
boot();

})();
